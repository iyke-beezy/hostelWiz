import * as React from 'react';
import { Keyboard, Text, Picker, View, TextInput, TouchableWithoutFeedback, Alert, Image, Dimensions, ImageBackground } from 'react-native';
import styles from "../style";
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { white } from 'react-native-paper/lib/typescript/src/styles/colors';



class LoginScreen extends React.Component {

  state = {
    fontsLoaded: false
  }

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

  componentDidMount() {
    this.loadFonts()
  }

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
        <ImageBackground source={require("../assets/images/bg.png")} style={[styles.page, {fontFamily: "BalooPaaji2"}]}>
          <Image
            style={{
              resizeMode: "contain",
              height: 100,
              width: 100,
              justifyContent: 'center',
              alignSelf: "center",
              backgroundColor: "#fff",
              padding: 30,
            }}
            source={require("../assets/images/splash.png")}
          />

          <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
          <Button
            buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
            onPress={() => this.props.navigation.navigate('Root')}
            title="Login"
          />

          <Button
            buttonStyle={styles.googleLoginButton}
            onPress={() => this.signInWithGoogleAsync()}
            icon={
              <Icon
                name="google"
                size={15}
                color="white"
              />
            }
            title="Login with Google"
          />
          <Button
            buttonStyle={styles.fbLoginButton}
            onPress={() => this.signInWithGoogleAsync()}
            title="Login with facebook"
          />
          <Text style={{ fontFamily: "BalooPaaji2" }}>
            Forgot Password?
                </Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Don't have an account,Sign up here</Text>
          </TouchableOpacity>

        </ImageBackground>
      );
    }

  }
}

export default LoginScreen;