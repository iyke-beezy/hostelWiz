import * as React from 'react';
import { StyleSheet, AsyncStorage, ScrollView, Switch, Picker,FlatList, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign} from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { delete_images } from '../api';
import axios from 'axios';

import ImageBrowser from './ImageBrowser'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
var Images = []



class EditImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesSet:[],
      property:{},
      id:4,
      bedroom_number:null,
      bathroom_number:null,
      accomodates:0,
      token:'',
    };
  }

  getImages = images => {
    
   
      images.map(image => {
        if (image.image.startsWith("https://hostelwiz.herokuapp.com")) {
          this.state.imagesSet.push(image.image)
        }
        else {
          this.state.imagesSet.push("https://hostelwiz.herokuapp.com" + image.image)
        }
      })
    
    console.log(images)
    console.log(this.state.imagesSet.length)
    return this.state.imagesSet
  }

  



  



  componentDidMount() {

  // this.getProperty();
   console.log(this.props.route.params.property.id)
   this.set_id();
   this.getImages(this.props.route.params.property.images)
 
  }

 

  set_id = async() =>{
    await AsyncStorage.setItem("property_id", JSON.stringify(this.props.route.params.property.id));
  }

  delete = async(x) =>{
    try{
      let userToken = await AsyncStorage.getItem("userToken");
      let data = JSON.parse(userToken);
        let result = delete_images(x,data);
        console.log(result);
        this.props.navigation.navigate('HMnav'
        )
    }catch(error){
      console.log("Something went wrong", error);
    }
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

          <View>
          <Button
                buttonStyle={styles.Button}
                //disabled={!this.state.name}
                onPress={() => this.props.navigation.navigate('editProperty', { property: this.props.route.params.property})}
                title="Edit the property details"
              />
               <Button
                buttonStyle={styles.Button}
                //disabled={!this.state.name}
                onPress={() => this.props.navigation.navigate('Images')}
                title="Add More Images"
              />
          </View>
          <View style={{margin:10}}>
            <Text style={{alignSelf:'center'}}>
              Delete images you do not want
            </Text>
          </View>
         
              <FlatList
           data={this.props.route.params.property.images}
           renderItem={({item}) => (
             //console.log(image);
                <TouchableOpacity onPress={() => this.delete(item.id)} style={styles.itemContainer}>
                    {<Image style={styles.item} source={{ uri: "https://hostelwiz.herokuapp.com"+`${item.image}` }} />
                    }
                   
                  </TouchableOpacity>
           )}
                keyExtractor={ item => item.id.toString()}
                numColumns={1}
                contentContainerStyle={{margin:4}}
                 />        
              <View style={styles.divider} ></View>

            <View style={{marginTop:20}}></View>
        
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
  itemContainer:{
    width: screenWidth/4,
    height: screenWidth/4,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
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
  Button: {
    height: screenHeight * 0.07,
    borderRadius: 5,
    backgroundColor: "#E7C654",
    marginTop: 20,
    alignSelf: 'flex-end',
    width: screenWidth * 0.85

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