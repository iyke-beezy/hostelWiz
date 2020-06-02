import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, Image, ImageBackground } from 'react-native';
import styles from "../style";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../api'

import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';



class LoginScreen extends React.Component {

  state = {
    fontsLoaded: false,
    user: null,
    loading: false,
    isReady: false,
    username: '',
    password: '',
  }

  /*   componentDidMount() {
    //    this.initAsync();
  }

 initAsync = async () => {
      try {
        await GoogleSignIn.initAsync({
          // You may ommit the clientId when the firebase `googleServicesFile` is configured
          clientId: '<YOUR_IOS_CLIENT_ID>',
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
      try {
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('542949173131834', {
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type=(large)`);
          const userInfo = await response.json()
          this.setState({ userInfo })
          console.log('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
          console.log("cancelled")
        }
      } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`);
      }
    }
    


  _login = async () => {
    this.setState({ loading: true })
    try {
      const token = await loginUser(this.state.username, this.state.password);
      const t = { token }
      console.log(t)
      //SecureStore.setItemAsync('token', token)
      this.setState({ loading: false })
      this.props.navigation.navigate("Root", {
        screen: 'Explore',
        params: { t: t },
      }
      )

    }
    catch (err) {
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