import * as React from 'react';
import {Keyboard,Image, Text, View,StyleSheet, TextInput,FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign ,Entypo} from '@expo/vector-icons';
import Colors from '../constants/Colors';


class ProfileScreen extends React.Component {


  switchRoute=(param)=>{
  switch(param) {
 
    case 'Edit Profile':
      this.One();
      break;
    
    case 'Notification':
      this.TWO();
      break;

    case 'Try hosting with us':
      this.props.navigation.navigate('HMnav')
      break;

    case 'Get Feedback':
      this.FOUR();
      break;

    case 'Terms of service':
      this.FOUR();
      break;

    case 'Logout':
      this.FOUR();
      break;

    default:
      Alert.alert("NUMBER NOT FOUND");
  
    }
  }



  

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.user}>
            <Image
            style={styles.image}
            source={require('../assets/images/user-active.png')}
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
            {key: 'Edit Profile'},//entypo
            {key: 'Notifications'},//ant and entypo
            {key: 'Try hosting with us'},//entypo
            {key: 'Get feedback'},
            {key: 'Terms Of Service'},
            {key: 'others'},
           
          ]}
          renderItem={({item}) =><Text style={styles.item} onPress={() =>this.switchRoute(`${item.key}`)}  >{item.key} </Text>}
        />
        <View style={styles.logoutContainer}>
          <Image
          style={styles.logout}
          source={require('../assets/images/logout.png')}
          />
          <Text style={styles.logoutText} onPress={() =>this.switchRoute('Logout')}>logout</Text>
        </View>
      </View>
         
      
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 40,
     backgroundColor:'white',
    },
    user:{
        alignItems:'center',
    },
    image:{
        height:100,
        width:85,
    },
    item: {
      padding: 10,
      margin:10,
      fontSize: 15,
     color:'black',
      height: 44,
    },
    logoutContainer:{
      paddingLeft:150,
        alignItems:"center",
        flexDirection:"row",
    },
    logout:{
      height:20,
      width:20,
    },
    logoutText:{
      fontSize:20,
      color:'#ff1493',
    },
  })

  export default ProfileScreen;