import * as React from 'react';
import { ToastAndroid, Text, View, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, Image, ImageBackground, Alert } from 'react-native';
import styles from "../style";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser,loginUser } from '../api';


class ConfirmPassword extends React.Component {
  state = {
    wrongPassword:false,
    username:'',
    password:'',
    confirmpassword:'',
    data:this.props.route.params.data,
    loading:false,
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

  _signUp = async () => {
    try {
        console.log(this.state.username)
        if(this.state.password===this.state.confirmpassword){
        const data = {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.data.first_name,
            last_name: this.state.data.last_name,
            email: this.state.data.email,
            contact: this.state.data.contact,
            groups:3,
        }
        const response = await registerUser(data)
        if(response){
          ToastAndroid.showWithGravityAndOffset(
            'You were succesfully registered',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
         console.log(response)
           this._login
         //this.props.navigation.navigate('Login')
        }
       
    }
    else {
        Alert.alert('Passwords dont match');
        this.setState({wrongPassword:true});

    }

    this._login()
    }
    catch (err) {
        console.log(err.errMessage)
    }
   
}

  render() {
    return (
      <ImageBackground source={require("../assets/images/bg.png")} style={[styles.page, { fontFamily: "Baloo-Paaji" }]}>
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
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({username:text})}
            />

          <TextInput
            placeholder="Password"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
             />

            <TextInput
            placeholder="Confirm Password"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({confirmpassword:text})}
             />

         
          <Button
            buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
            onPress={() => this._signUp()}
            title="Sign Up"
            loading={this.state.loading}
          />
          {
              this.state.wrongPassword ?
              
              <Text>Passwords are not matching</Text>:
              
              <View><Text></Text></View>
          }

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

          <TouchableNativeFeedback>
            <View style={styles.fbLoginButton}>
              <Text style={{ fontFamily: 'Baloo-Paaji', color: '#fff', fontSize: 18 }}>
                <Icon name="facebook"
                  size={18}
                  color="white" />  Login with Facebook</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')} style={{ paddingLeft: 10, }}>
          <View style={{paddingLeft: 10, paddingBottom: 10}}>
            <Text style={{ fontFamily: "Baloo-Paaji" }}>Already have an account?  <Text style={{ fontWeight: 'bold', fontFamily: 'Baloo-Paaji-Medium', color: '#92A5A3' }}>Login</Text></Text>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </ImageBackground>

    );
  }
}

export default ConfirmPassword;