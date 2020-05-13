import * as React from 'react';
import { Keyboard, Text, Picker, View, TextInput, TouchableWithoutFeedback, Alert, Image, Dimensions, ImageBackground } from 'react-native';
import styles from "../style";
import { Card, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';


class LoginScreen extends React.Component {

  state = {
    fontsLoaded: false,
    user: null
  }

  componentDidMount() {
    this.loadFonts()
    this.initAsync();
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

  signInAsync = async () => {
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
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '193715308872-tj21k44qisnund77qcij2lnv3n6pd098.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  //facebook signin
/*  FacebooklogIn = async () => {
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
  */

  loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Baloo_Paaji` from a static resource
      'BalooPaaji2': require('../assets/fonts/BalooPaaji2-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Baloo_Paaji-Medium': require('../assets/fonts/BalooPaaji2-Medium.ttf'),

    });
    this.setState({ fontsLoaded: true })
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (<AppLoading />)
    }
    else {
      return (

        <ImageBackground source={require("../assets/images/bg.png")} style={[styles.page, { fontFamily: "BalooPaaji2" }]}>
          <View style={styles.imgtop}>
            <Image
              style={styles.Logoimg}
              source={require("../assets/images/splash.png")}
            />
          </View>
          <KeyboardAwareScrollView style={styles.content}>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={[styles.loginFormTextInput, { fontFamily: "BalooPaaji2", color: '#fff' }]} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={[styles.loginFormTextInput, { fontFamily: "BalooPaaji2", color: '#fff' }]} secureTextEntry={true} />

            <Button
              buttonStyle={styles.loginButton}
              //onPress={() => this.onLoginPress()}
              onPress={() => this.props.navigation.navigate('Root')}
              title="Login"
            />

            <TouchableNativeFeedback style={styles.googleLoginButton} onPress={() => this.signInWithGoogleAsync()}>
              <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
                <Icon
                  name="google"
                  size={18}
                  color="white"
                />Login with Google</Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback style={styles.fbLoginButton} onPress={() => this.signInWithGoogleAsync()}>
              <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
                <Icon name="facebook"
                  size={18}
                  color="white" />  Login with Facebook</Text>
            </TouchableNativeFeedback>

            <Text style={{ fontFamily: "BalooPaaji2", paddingLeft: 10, }}>
              Forgot Password?
                </Text>

            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('SignUp')} style={{ paddingLeft: 10, }}>
              <Text style={{ fontFamily: "BalooPaaji2" }}>Don't have an account?  <Text style={{ fontWeight: 'bold', fontFamily: 'Baloo_Paaji-Medium', color: '#92A5A3' }}>Sign up here</Text></Text>
            </TouchableNativeFeedback>
          </KeyboardAwareScrollView>
        </ImageBackground>
      );
    }
  }
}

export default LoginScreen;