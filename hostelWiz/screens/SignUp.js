import * as React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import styles from "../style";
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SignUpScreen extends React.Component {
  state = {
    first_name:'',
    last_name:'',
    email:'',
    contact:'',
    loading:false,
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
            onPress={() => this._signUp()}
            title="Next"
           
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