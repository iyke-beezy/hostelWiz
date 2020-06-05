import * as React from 'react';
import { ToastAndroid, Text, View, TextInput, AsyncStorage, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import styles from "../style";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser } from '../api';


class SignUpScreen extends React.Component {
  state = {
    username:'',
    password:'',
    first_name:'',
    last_name:'',
    email:'',
    groups:'',
    contact:'',
    loading: false,
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



  _signUp = async () => {
    this.setState({ loading: true })
    try {
        const data = {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            groups: this.state.groups,
            contact: this.state.contact,
        }
        const response = await registerUser(data)
        if(response){
          ToastAndroid.showWithGravityAndOffset(
            'Registeration Successful',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
         this._login()
        }         
    }
    catch (err) {
        console.log(err)
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
            loading={this.state.loading}
            //onPress={() => this.onLoginPress()}
            onPress={this._signUp}
            title="Sign Up"
          />

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