import * as React from 'react';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import styles from "../style";
import { Card,Button, Icon } from 'react-native-elements';


class LoginScreen extends React.Component {


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

    render() {
      return (
        <View style={{marginTop:100}}>
       
  
      
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
            <Text style={styles.logoText}>HostelWiz</Text>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <View style={{margin:20}}>
              <Button 
                buttonStyle={styles.loginButton}
              //onPress={() => this.onLoginPress()}
                onPress={() => this.props.navigation.navigate('Root')}
                title="Login"
              /> 
              </View>
              <View style={{margin:60}} >
                <Text>
                  Forgot Password?
                </Text>
               
                <Text  onPress={() => this.props.navigation.navigate('SignUp')}>
                  Don't have an account,Sign up here
                </Text>
                </View>
               <View style={{marginTop:1 }}>
              <Button 
                buttonStyle={styles.googleLoginButton}
                onPress={() => this.signInWithGoogleAsync()}
                title="G+"
              /> 
              </View>
              <View style={{marginTop:70 }}>
                 <Button 
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.signInWithGoogleAsync()}
                title="Login with facebook"
              /> 
            
            </View>
           
            </View>
          </View>
      
       
        </View>
         
      
      );
    }
  }

  export default LoginScreen;