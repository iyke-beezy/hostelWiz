import * as React from 'react';
import { StyleSheet, AsyncStorage, ScrollView, Switch, Picker, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign} from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { post_images } from '../api';
import axios from 'axios';
import { getMyProperties,getHostelManager,add_to_hostel_manager_table } from '../api';




const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
var Images = []
class checkManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:4,
      isManager:false,
      sub_type:'month',
      token:'',
    };
  }

 
 


  componentDidMount() {
   // AsyncStorage.removeItem("photos")
   this.getToken();
    this._unSubscribe = this.props.navigation.addListener('blur', () => {
      console.log(Images)
    });
  }
  getToken = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let data = JSON.parse(userToken)
      console.log(data)
      this.setState({token: data});
   
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

 

  addmanager = async () => {
    try {
      console.log(this.state.token);
      const datas = await add_to_hostel_manager_table(this.state.token,this.state.sub_type);
      console.log(datas); 
     
          this.props.navigation.navigate('HMnav');
      

       }
    catch (err) {
      console.log(err)
    }
    //this.setState({property:data});


  }


  UNSAFE_componentWillMount() {
    this._unSubscribe;
  }

  render() {



      return (
        <View style={styles.container}>
          {//name
            <View Style={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "flex-start", marginBottom: 15 }} >
                <Text style={styles.title}>You are about to become a hostel manager,Select a subscription type to begin</Text>
              </View>
             
                  <Picker
                    selectedValue={this.state.sub_type}
                    style={{ width: screenWidth * (0.6), fontSize: 20, fontFamily: 'Baloo-Paaji', color: 'grey' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({sub_type: itemValue })}
                  >
                    <Picker.Item label="month" value="month" />
                    <Picker.Item label="week" value="week" />
                   
                  </Picker>
                  
              <View style={styles.divider} ></View>

              <Button
                buttonStyle={styles.nextButton}
                onPress={() => this.addmanager()}
                title="Next"
              />
            </View>
            }
        </View>
      )
    
  
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    height: screenHeight,
    padding: 18,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: 'Baloo-Paaji-Medium',
    //color:'gainsboro'

  },
  emptyStay: {
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#ffa45c'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#5d5d5a'
  },
  label: {
    fontSize: 20,
    color: 'grey',
    fontFamily: 'Baloo-Paaji-Medium'
  },
  input: {
    marginTop: 5, fontSize: 20, color: 'grey', fontFamily: 'Baloo-Paaji'
  },
  divider: {
    borderBottomWidth: 1, marginTop: 10, borderColor: "gainsboro", marginBottom: 10
  },
  nextButton: {
    height: screenHeight * 0.07,
    borderRadius: 5,
    backgroundColor: "#E7C654",
    marginTop: 20,
    alignSelf: 'flex-end',
    width: screenWidth * 0.25

  },
  secNextButton: {
    height: screenHeight * 0.07,
    borderRadius: 5,
    backgroundColor: "#E7C654",
    marginTop: 20,
    alignSelf: 'flex-end',
    width: screenWidth * 0.25

  },
  backAndSave: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 64,

    alignItems: "center",
    justifyContent: 'center',
  },
  switchColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bed: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
})




export default checkManager;