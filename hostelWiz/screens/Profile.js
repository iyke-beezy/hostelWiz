import * as React from 'react';
import {Keyboard,Image, Text, View,StyleSheet, TextInput,FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';


class ProfileScreen extends React.Component {


  

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.user}>
            <Image 
            src={require('../assets/images/user-active.png')}
            />
            <Text>
                Test User
            </Text>
            <Text>
                user@test.com
            </Text>
        </View>
        <FlatList
          data={[
            {key: 'Edit Profile'},
            {key: 'Notifications'},
            {key: 'Get help'},
            {key: 'Get feedback'},
            {key: 'Terms Of Service'},
            {key: 'Log Out'},
           
          ]}
          renderItem={({item}) => <Text  style={styles.item}>{item.key}</Text>}
        />
      </View>
         
      
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 40
    },
    user:{
        alignItems:'center',
    },
    item: {
      padding: 10,
      marginBottom:10,
      fontSize: 25,
     color:'grey',
      height: 44,
    },
  })

  export default ProfileScreen;