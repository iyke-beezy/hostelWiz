import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, Image, ImageBackground, AsyncStorage } from 'react-native';
import styles from "../style";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../api'

import * as GoogleSignIn from 'expo-google-sign-in';
import firebase from './firebase';
import * as Facebook from 'expo-facebook';
//import * as Google from 'expo-google-app-auth';


class LoginScreen extends React.Component {

  state = {
    fontsLoaded: false,
    user: null,
    loading: false,
    isReady: false,
    username: '',
    password: '',
  }

  async storeUser(user) {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
      this.setState({ loading: false })
      this.props.navigation.navigate("Root", {
        screen: 'Explore',
      }
      )
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  
  async storeToken(token) {
    try {
      await AsyncStorage.setItem("userToken", JSON.stringify(token));
      this.setState({ loading: false })
      this.props.navigation.navigate("Root", {
        screen: 'Explore',
      }
      )
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
        this.storeUser(user.providerData)
      }

      // Do other things
    });
    //this.initAsync();
  }

  /*initAsync = async () => {
    try {
      await GoogleSignIn.initAsync({
        // You may ommit the clientId when the firebase `googleServicesFile` is configured
        // Provide other custom options...
      });
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
  };
 
  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };
 
  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };
 
  GoogleSignIn = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };
 
  //google signin
  /*signInWithGoogleAsync = async () => {
     try {
       const result = await Google.logInAsync({
         behavior: 'web',
         androidClientId: '503609456773-k5p11ckkutif99c9gh996dcm03jsvd7q.apps.googleusercontent.com',
         // iosClientId: YOUR_CLIENT_ID_HERE,
         scopes: ['profile', 'email'],
       });
 
       if (result.type === 'success') {
         console.log(result.accessToken)
         return result.accessToken;
       } else {
         return { cancelled: true };
       }
     } catch (e) {
       return { error: true };
     }
   }
 */


  //facebook signin
  FacebooklogIn = async () => {
    await Facebook.initializeAsync(
      '2547147542165666',
    );

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      console.log(token)
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        alert(`facebook error : ${error}`)
      });
    }
  }



  _login = async () => {
    this.setState({ loading: true })
    try {
      const token = await loginUser(this.state.username, this.state.password);
      const t = { token }
      //SecureStore.setItemAsync('token', token)
      this.setState({ loading: false })
      this.storeToken(t)
    }
    catch (err) {
      console.log(err.errMessage)
      this.setState({ err: err.errMessage, loading: false })
    }

  }

  handleUsername = username => {
    this.setState({ username })

    if (this.state.loading) {
      this.setState({ loading: false })
    }
  }

  handlePassword = password => {
    this.setState({ password })
    if (this.state.loading) {
      this.setState({ loading: false })
    }
  }
  async _cacheResourcesAsync() {
    const images = [require("../assets/images/bg.png"), require("../assets/images/splash.png")];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  render() {
    {
      return (
        !this.state.isReady ? (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        ) : (
            <ImageBackground source={require("../assets/images/bg.png")} style={[styles.page, { fontFamily: "Baloo-Paaji" }]}>
              <View style={styles.imgtop}>
                <Image
                  style={styles.Logoimg}
                  source={require("../assets/images/splash.png")}
                />
              </View>
              <KeyboardAwareScrollView style={styles.content}>
                <Text>{this.state.err}</Text>
                <TextInput placeholder="Username" placeholderColor="#fff" style={[styles.loginFormTextInput, { fontFamily: "Baloo-Paaji", color: '#fff' }]} onChangeText={this.handleUsername} autoCapitalize="none" />
                <TextInput placeholder="Password" placeholderColor="#fff" style={[styles.loginFormTextInput, { fontFamily: "Baloo-Paaji", color: '#fff' }]} secureTextEntry={true} onChangeText={this.handlePassword} />

                <Button
                  buttonStyle={styles.loginButton}
                  //onPress={() => this.onLoginPress()}
                  onPress={this._login}
                  title="Login"
                  loading={this.state.loading}
                />

                <TouchableNativeFeedback onPress={() => this.signInWithGoogleAsync()}>
                  <View style={styles.googleLoginButton}>
                    <Text style={{ fontFamily: 'Baloo-Paaji', color: '#fff', fontSize: 18 }}>
                      <Icon
                        name="google"
                        size={18}
                        color="white"
                      />  Login with Google</Text>
                  </View>

                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => this.FacebooklogIn()}>
                  <View style={styles.fbLoginButton}>
                    <Text style={{ fontFamily: 'Baloo-Paaji', color: '#fff', fontSize: 18 }}>
                      <Icon name="facebook"
                        size={18}
                        color="white" />  Login with Facebook</Text>
                  </View>
                </TouchableNativeFeedback>

                <Text style={{ fontFamily: "Baloo-Paaji", paddingLeft: 10, }}>
                  Forgot Password?
                </Text>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SignUp')}>
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontFamily: "Baloo-Paaji" }}>Don't have an account?  <Text style={{ fontFamily: 'Baloo-Paaji-Medium', paddingLeft: 10, color: '#92A5A3' }}>Sign up here</Text></Text>
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAwareScrollView>
            </ImageBackground>
          )
      );
    }

  }
}

export default LoginScreen;