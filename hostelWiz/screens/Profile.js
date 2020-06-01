import * as React from 'react';
import {Keyboard,Image, Dimensions , Text, View,StyleSheet, TextInput,FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign ,Entypo} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { getUser } from '../api';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import Constants from 'expo-constants';



class ProfileScreen extends React.Component {
  state={
    token:'286ffbb3abfacc19e516ae4327deae01bb7132b5',
    user:{
    
    },
  }
  componentDidMount(){
    this.getUserDetails();
  
  }

  getUserDetails = async () => {
    const profile = await getUser(this.state.token)
    this.setState({user:profile.user})
    console.log(profile)
  }

  switchRoute=(param)=>{
  switch(param) {
 
    case 'Edit Profile':
    this.props.navigation.navigate('edit',{user:this.state.user})
      break;
    
    case 'Notifications':
      this.props.navigation.navigate('notification')
       break;

    case 'Try hosting with us':
      this.props.navigation.navigate('HMnav')
      break;

    case 'Get feedback':
      this.props.navigation.navigate('feedback')
      break;

    case 'Terms Of Service':
       this.props.navigation.navigate('terms')
      break;

      case 'others':
        this.props.navigation.navigate('others')
       break;

    case 'Logout':
      this.props.navigation.navigate('Login');
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
                {this.state.user.first_name}
            </Text>
            <Text>
                {this.state.user.email}
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
      backgroundColor: 'white',
      flexDirection: 'column',
      flex: 1,
      alignItems:'stretch',
      fontFamily: 'Baloo-Paaji',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      paddingLeft: screenWidth * 0.01,
      paddingRight: screenWidth * 0.01,
      height: screenHeight
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
      //paddingLeft:150,
      justifyContent:"center",
      //  alignItems:"center",
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