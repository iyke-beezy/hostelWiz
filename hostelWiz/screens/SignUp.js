import * as React from 'react';
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import styles from "../style";
import { Card, Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class SignUpScreen extends React.Component {
  state = {
    fontsLoaded: false,
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

  componentDidMount() {
    this.loadFonts()
  }


  render() {
    return (
      <ImageBackground source={require("../assets/images/bg.png")} style={[styles.page, { fontFamily: "BalooPaaji2" }]}>
        <View style={styles.imgtop}>
          <Image
            style={styles.Logoimg}
            source={require("../assets/images/splash.png")}
          />
        </View>
        <KeyboardAwareScrollView style={styles.content}>
          <TextInput
            placeholder="Username"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "BalooPaaji2", color: '#fff' }
            ]} />

          <TextInput
            placeholder="Password"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "BalooPaaji2", color: '#fff' }
            ]}
            secureTextEntry={true} />

          <TextInput
            placeholder="name"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "BalooPaaji2", color: '#fff' }
            ]} />

          <TextInput
            placeholder="phonenumber"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "BalooPaaji2", color: '#fff' }
            ]} />
          <TextInput
            placeholder="group"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "BalooPaaji2", color: '#fff' }
            ]} />

          <Button
            buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
            onPress={() => this.props.navigation.navigate('Login')}
            title="SignUp"
          />

          <TouchableWithoutFeedback style={styles.googleLoginButton} onPress={() => this.signInWithGoogleAsync()}>
            <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
              <Icon
                name="google"
                size={18}
                color="white"
              />Login with Google</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback style={styles.fbLoginButton}>
            <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
              <Icon name="facebook"
                size={18}
                color="white" />  Login with Facebook</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback style={styles.googleLoginButton} onPress={() => this.signInWithGoogleAsync()}>
            <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
              <Icon
                name="google"
                size={18}
                color="white"
              />Login with Google</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback style={styles.fbLoginButton}>
            <Text style={{ fontFamily: 'BalooPaaji2', color: '#fff', fontSize: 18 }}>
              <Icon name="facebook"
                size={18}
                color="white" />  Login with Facebook</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')} style={{ paddingLeft: 10, }}>
              <Text style={{ fontFamily: "BalooPaaji2" }}>Already have an account?  <Text style={{ fontWeight: 'bold', fontFamily: 'Baloo_Paaji-Medium', color: '#92A5A3' }}>Login</Text></Text>
              </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ImageBackground>

    );
  }
}

export default SignUpScreen;