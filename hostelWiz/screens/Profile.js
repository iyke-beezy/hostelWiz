import * as React from 'react';
import {Keyboard,Image, Dimensions , Text, View,StyleSheet, TextInput,FlatList,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign ,Entypo,FontAwesome5,FontAwesome,MaterialIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { getUser } from '../api';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';



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
 
    case 'edit':
    this.props.navigation.navigate('edit',{user:this.state.user})
      break;
    
    case 'notification':
      this.props.navigation.navigate('notification')
       break;

    case 'hosting':
      this.props.navigation.navigate('HMnav')
      break;

    case 'feedback':
      this.props.navigation.navigate('feedback')
      break;

    case 'term':
       this.props.navigation.navigate('terms')
      break;

      case 'other':
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

            <View style={{  marginLeft: screenWidth * 0.05,}}>
            <Text style={styles.username}>
                {this.state.user.first_name}
            </Text>
            <Text style={styles.email}>
                {this.state.user.email}
            </Text>
            </View>
        </View>
      
        <View style={styles.listView}>
        <View style={styles.detailDivider}></View>
        <View style={styles.listItems}>
       <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('edit')}>
         <Text style={{fontSize:20}}>
          <FontAwesome5 size={20} color={'grey'} name={'pen'}/>    Edit Profile
         </Text></TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('notification')}>
         <Text style={{fontSize:20}}>
          <FontAwesome size={25} color={'grey'} name={'bell'}/>   Notifications
         </Text></TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('hosting')}>
         <Text style={{fontSize:20}}>
          <FontAwesome size={25} color={'grey'} name={'exchange'}/>   Become a hostel manager 
         </Text></TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('feedback')}>
         <Text style={{fontSize:20}}>
          <MaterialIcons size={25} color={'grey'} name={'feedback'}/>   Get feedback
         </Text></TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('term')}>
         <Text style={{fontSize:20}}>
          <Entypo size={25} color={'grey'} name={'text'}/>   Terms and Condition
         </Text></TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress ={()=>this.switchRoute('other')}>
         <Text style={{fontSize:20}}>
          <Entypo color={'grey'} size={25} name={'dots-three-horizontal'}/>   Others
         </Text></TouchableOpacity>
         </View>
         <View style={styles.detailDividerTwo}></View>
        <View style={styles.logoutContainer}>
         
          <Text style={styles.logoutText} onPress={() =>this.switchRoute('Logout')}>
          <AntDesign size={25} name={'poweroff'}/>   logout</Text>
    </View>
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
      //justifyContent:'center',
      paddingTop: Constants.statusBarHeight,
      paddingLeft: screenWidth * 0.01,
      paddingRight: screenWidth * 0.01,
      height: screenHeight
    },
    user:{

        alignItems:'center',
        marginBottom:screenHeight*0.04,
        flexDirection:"row",
        marginLeft: screenWidth * 0.05,
    },
    image:{
        height:100,
        width:100,
        borderRadius:100,
        borderWidth:0.5,
        borderColor:'grey',

    },
    item: {
      padding: 10,
      margin:10,
      fontSize: 20,
     color:'black',
      height: 44,
    },
    logoutContainer:{
      //paddingLeft:150,
      justifyContent:"flex-start",
      //  alignItems:"center",
        flexDirection:"row",
    },
    logout:{
    
      height:20,
      width:20,
    },
    logoutText:{
      padding: 10,
      margin:10,
      fontSize:20,
      color:'#ff1493',
    },
    detailDivider: {
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 1,
      marginBottom: 10,
     // marginRight: screenWidth * 0.05,
      //marginLeft: screenWidth * 0.05
    },
    detailDividerTwo: {
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 1,
      marginBottom: 10,
     // marginRight: screenWidth * 0.05,
      marginLeft: screenWidth * 0.13,
      marginTop:screenHeight*0.01,
    },
    listView:{
      alignItems:'stretch',
      marginTop:screenHeight*0.02,
    
    },
    listItems:{
      justifyContent:'space-evenly',
    },
    username:{
      fontSize:35,
      fontFamily: 'Baloo-Paaji',
    },
    email:{
      fontSize:20,
      fontFamily: 'Baloo-Paaji-Medium',
      color:'grey',
    },

  })

  export default ProfileScreen;