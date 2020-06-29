import * as React from 'react';
import { StyleSheet, AsyncStorage, ScrollView, Switch, Picker, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign} from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { create_property } from '../api';
import axios from 'axios';

import ImageBrowser from './ImageBrowser'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
var Images = []



class EditImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      property:{},
      id:4,
      bedroom_number:null,
      bathroom_number:null,
      accomodates:0,
      token:'',
    };
  }

  



  



  componentDidMount() {

   this.getProperty();
  }

  getProperty = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let data = JSON.parse(userToken)
      let property = await AsyncStorage.getItem("property_to_edit")
      let property_to_edit = JSON.parse(property)
      this.setState({token: data})
      this.getProperties();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

 

  render() {

  

      return (
        <View style={styles.container}>
          {//name
            <View Style={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "flex-start", marginBottom: 15 }} >
                <Text style={styles.title}>Kindly enter the  name for your hostel/apartment</Text>
              </View>
              <TextInput
                placeholder="name"
                placeholderColor="#fff"
                defaultValue={this.state.name}
                style={styles.input}
                onChangeText={(text) => this.setState({ name: text })}
              />
              <View style={styles.divider} ></View>

              <Button
                buttonStyle={styles.nextButton}
                disabled={!this.state.name}
                onPress={() => this.setState({ screen: 'two' })}
                title="Next"
              />
            </View>}
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




export default EditImage;