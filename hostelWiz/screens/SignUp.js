import * as React from 'react';
import { ToastAndroid, Text, View, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import styles from "../style";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser,loginUser } from '../api';


class SignUpScreen extends React.Component {
  state = {

    first_name:'',
    last_name:'',
    email:'',
    contact:'',
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

 

  _signUp = () => {
    try {
        const data = {
            
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            contact: this.state.contact,
        }
       
         this.props.navigation.navigate('ConfirmPassword',{data:data})
        
        
         
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
            placeholder="Email"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({email:text})}
            />

          <TextInput
            placeholder="first name"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({first_name:text})}
            />

              <TextInput
            placeholder="last name"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({last_name:text})}
            />

          <TextInput
            placeholder="phonenumber"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]} 
            onChangeText={(text) => this.setState({contact:text})}
            />

          <Button
            buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
            onPress={() => this._signUp()}
            title="Next"
           
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

export default SignUpScreen;