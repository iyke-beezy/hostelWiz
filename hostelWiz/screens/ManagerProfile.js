import * as React from 'react';
import { Keyboard, Image, Dimensions, Text, View, StyleSheet, Alert, AsyncStorage, ScrollView } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { getUser } from '../api';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';


class ManagerProfile extends React.Component {
  state = {
    token: '',
    user: {},
    loginSource: null
  }
  componentDidMount() {
    this.init()
    // if (AsyncStorage.getItem('userToken')) {
    //   this.getToken()
    // } else {
    //   this.getUser()
    // }

    //this.getUserDetails();
  }
  init = async () => {
    const status = await AsyncStorage.getItem('userToken')
    if (status) {
      this.getToken()
    } else {
      this.getUser()
    }
  }
  async getUser() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      this.setState({ user: data[0], loginSource: 'facebook' })
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  getToken = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let token = JSON.parse(userToken)
      this.setState({ token, loginSource: 'token' })
      this.getUserDetails();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  getUserDetails = async () => {
    const profile = await getUser(this.state.token)
    this.setState({ user: profile.user })
  }

  switchRoute = (param) => {
    switch (param) {

      case 'edit':
        this.props.navigation.navigate('edit', { user: this.state.user })
        break;

      case 'notification':
        this.props.navigation.navigate('notification')
        break;

      case 'client':
        this.props.navigation.navigate('Root')
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
        <ScrollView>
          <View style={styles.user}>
            {this.state.loginSource === 'token' ?
              <Image
                style={styles.image}
                source={require('../assets/images/user-active.png')}
              />
              :
              <Image
                style={styles.image}
                source={{ uri: this.state.user.photourl }}
              />
            }

            <View style={{ marginLeft: screenWidth * 0.05, marginRight: screenWidth * 0.05 }}>
              {this.state.loginSource && this.state.loginSource === 'token' ?
                <Text style={styles.username}>
                  {this.state.user.first_name} {this.state.user.last_name}
                </Text>
                :
                <Text style={styles.username}>
                  {this.state.user.displayName}
                </Text>
              }
              <Text style={styles.email}>
                {this.state.user.email}
              </Text>
            </View>
          </View>

          <View style={styles.listView}>
            <View style={styles.detailDivider}></View>
            <View style={styles.listItems}>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('edit')}>
                <Text style={styles.itemText}>
                  <FontAwesome5 size={20} color={'#92A5A3'} name={'pen'} />    Edit Profile
         </Text></TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('notification')}>
                <Text style={styles.itemText}>
                  <FontAwesome size={25} color={'#92A5A3'} name={'bell'} />   Notifications
         </Text></TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('client')}>
                <Text style={styles.itemText}>
                  <FontAwesome size={25} color={'#92A5A3'} name={'exchange'} />   Switch back to client side
         </Text></TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('feedback')}>
                <Text style={styles.itemText}>
                  <MaterialIcons size={25} color={'#92A5A3'} name={'feedback'} />   Get feedback
         </Text></TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('term')}>
                <Text style={styles.itemText}>
                  <Entypo size={25} color={'#92A5A3'} name={'text'} />   Terms and Condition
         </Text></TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => this.switchRoute('other')}>
                <Text style={styles.itemText}>
                  <Entypo color={'#92A5A3'} size={25} name={'dots-three-horizontal'} />   Others
         </Text></TouchableOpacity>
            </View>
            <View style={styles.detailDividerTwo}></View>
            <View style={styles.logoutContainer}>

              <Text style={styles.logoutText} onPress={() => {
                firebase.auth().signOut().then(function () {
                  // Sign-out successful.
                }).catch(function (error) {
                  // An error happened.
                });
                AsyncStorage.removeItem('userData')
                AsyncStorage.removeItem('userToken')
                this.switchRoute('Logout')
              }}>
                <AntDesign size={18} name={'poweroff'} /> logout</Text>
            </View>
          </View>
        </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    fontFamily: 'Baloo-Paaji',
    //justifyContent:'center',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: screenWidth * 0.01,
    paddingRight: screenWidth * 0.01,
    height: screenHeight * 0.9,
    marginBottom: 0.05
  },
  user: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.04,
    flexDirection: "row",
    marginLeft: screenWidth * 0.05,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#92A5A3',
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    color: 'black',
    height: screenHeight * 0.06,
    fontFamily: 'Baloo-Paaji'
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'Baloo-Paaji-Medium'
  },
  logoutContainer: {
    //paddingLeft:150,
    justifyContent: "flex-start",
    //  alignItems:"center",
    flexDirection: "row",
    marginTop: 0,
    marginBottom: screenHeight * 0.06
  },
  logout: {
    height: 20,
    width: 20,
  },
  logoutText: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    color: '#ff1493',
    fontFamily: 'Baloo-Paaji-Medium'
  },
  detailDivider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginBottom: 6,
    // marginRight: screenWidth * 0.05,
    //marginLeft: screenWidth * 0.05
  },
  detailDividerTwo: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginBottom: 0,
    // marginRight: screenWidth * 0.05,
    marginLeft: screenWidth * 0.13,
    marginTop: screenHeight * 0.01,
  },
  listView: {
    alignItems: 'stretch',
    marginTop: screenHeight * 0.02,

  },
  listItems: {
    justifyContent: 'space-evenly',
  },
  username: {
    fontSize: 22,
    fontFamily: 'Baloo-Paaji',
  },
  email: {
    fontSize: 20,
    fontFamily: 'Baloo-Paaji-Medium',
    color: '#92A5A3',
  },

})
  export default ManagerProfile;