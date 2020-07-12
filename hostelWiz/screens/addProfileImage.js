import * as React from 'react';
import { ToastAndroid, Text, View, TextInput, AsyncStorage, TouchableWithoutFeedback, Image, ImageBackground, Alert } from 'react-native';
import styles from "../style";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser,loginUser } from '../api';

import 'firebase/firestore';
import firebase from 'firebase';

class AddProfilePicture extends React.Component {
  state = {
   
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
       <View>
                     <Image
                style={styles.image}
                source={require('../assets/images/user-active.png')}
                        />
       </View>
      </ImageBackground>

    );
  }
}

export default AddProfilePicture;