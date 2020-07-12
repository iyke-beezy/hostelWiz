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
class HostingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      type: '',
      name: '',
      location: '',
      headline: '',
      description: '',
      price: '',
      found: false,
      rate_type: 'month',
      number_of_rooms: '0',
      Single: false,
      Duo: false,
      Trio: false,
      Quadro: false,
      building_type: 'hostel',
      hostel_type:'hostel',
      wifi: false,
      tv_room: false,
      car_park: false,
      gym: false,
      laundry: false,
      study_room: false,
      screen: 'one',
      private: false,
      shared: false,
      single: false,
      duo: false,
      trio: false,
      quatro: false,
      bathroom_value: '',
      bedroom_value: '',
      hasCameraPermission: null,
      hasCameraRollPermission: null,
      image: [],
      photos: [],
      id:4,
      bedroom_number:null,
      bathroom_number:null,
      accomodates:'',
      phone_number:'',
    };
  }

  
  postProperties = async() =>{
    try {

      let userToken = await AsyncStorage.getItem("userToken");
      let token = JSON.parse(userToken)
      console.log(this.state.number_of_rooms)
    
          const data =
          {
            name : this.state.name,
            description : this.state.description,
            address : this.state.address,
            city : this.state.city,
            region : this.state.region,
            bedrooms : this.state.bedroom_number,
            bathrooms : this.state.bathroom_number,
            accomodates : this.state.accomodates,
            number_of_rooms : this.state.number_of_rooms,
            hostel_type : this.state.hostel_type,
            rate_type : this.state.rate_type,
            headline : this.state.headline,
            price : this.state.price,
            wifi : this.state.wifi,
            car_park : this.state.car_park,
            gym : this.state.gym,
            laundry: this.state.laundry,
            study_room : this.state.study_room,
            tv_room : this.state.tv_room,
            bathroom_type : this.state.bathroom_value,
            bedroom_type : this.state.bedroom_value,
            phone_number:this.state.phone_number,
          }
          const response = await create_property(token,data);
          console.log(response.result.id)
          await AsyncStorage.setItem("property_id", JSON.stringify(response.result.id));
    }
    catch (error) {
      console.log(error)
    }
  }




  toggleSwitch = () => {
    this.setState({ wifi: !this.state.wifi });
  }

  componentDidMount() {
    if(this.props.route.params){
      this.setState({screen: this.props.route.params.screen})
    }
    this._unSubscribe = this.props.navigation.addListener('blur', () => {
      
    });
  }

  UNSAFE_componentWillMount() {
    this._unSubscribe;
  }

  render() {

    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;

    if (this.state.screen === 'one') {

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
    else if (this.state.screen === 'two') {
      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'one' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>


          {
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 15 }} >
                <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium' }}>Kindly tell us how many rooms are available and the type of room(Hostel/Apartment).
                Correspondingly set your price and rate type below.</Text>
              </View>
              <Text style={styles.label}></Text>

              <Picker
                selectedValue={this.state.hostel_type}
                style={{ width: screenWidth * (0.6), fontSize: 20, fontFamily: 'Baloo-Paaji', color: 'grey' }}
                onValueChange={(itemValue, itemIndex) => this.setState({ hostel_type: itemValue })}
              >
                <Picker.Item label="Hostel" value="hostel" />
                <Picker.Item label="Rent Apartment" value="apartment" />
             
              </Picker>

              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              {/* Room type */}
              {this.state.building_type !== 'hostel' ?
                <View>
                  <TextInput
                    placeholder="Number of rooms"
                    placeholderColor="#fff"
                    value={this.state.number_of_rooms}
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState({ number_of_rooms: text })}
                  />
                  <View style={styles.divider} ></View>
                  <Text style={styles.label}></Text>
                </View>
                :
                null
              }


              <TextInput

                placeholder="Price"
                placeholderColor="#fff"
                defaultValue={this.state.price}
                style={styles.input}
                keyboardType='decimal-pad'
                onChangeText={(text) => this.setState({ price: text })}
              />
              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              <TextInput

                placeholder="Phone number"
                placeholderColor="#fff"
                defaultValue={this.state.phone_number}
                style={styles.input}
                keyboardType='decimal-pad'
                onChangeText={(text) => this.setState({ phone_number: text })}
                />
                <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              {this.state.hostel_type !== 'hostel' ?
                <View>
                  <Picker
                    selectedValue={this.state.rate_type}
                    style={{ width: screenWidth * (0.6), fontSize: 20, fontFamily: 'Baloo-Paaji', color: 'grey' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ rate_type: itemValue })}
                  >
                    <Picker.Item label="Per Month" value="month" />
                    <Picker.Item label="Per Year" value="year" />
                    <Picker.Item label="Per Week" value="week" />
                    <Picker.Item label="Per Day" value="day" />
                  </Picker>
                  <View style={styles.divider} ></View>
                </View>
                :
                null
              }

              <Button
                buttonStyle={styles.secNextButton}
                disabled={!this.state.price ? true : false}
                onPress={() => this.setState({ screen: 'three' })}
                title="Next"
              />

            </KeyboardAwareScrollView>}
        </View >

      )
    }
    else if (this.state.screen === 'three') {


      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'two' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>


          {
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }} >
                <Text style={styles.title}>Give a catchy headline to attract users ,and a description of how
           your hostel looks and the features it has and tell us where your hostel/apartment is situated . </Text>
              </View>

              <Text style={styles.label}></Text>

              <TextInput
                placeholder="Headline"
                placeholderColor="#fff"
                defaultValue={this.state.headline}
                style={styles.input}
                onChangeText={(text) => this.setState({ headline: text })}
              />
              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              <TextInput

                placeholder="Description"
                placeholderColor="#fff"
                defaultValue={this.state.description}
                style={styles.input}
                onChangeText={(text) => this.setState({ description: text })}
              />
              <View style={styles.divider} ></View>
              
              <Text style={styles.label}></Text>

              <TextInput

                placeholder="Address"
                placeholderColor="#fff"
                defaultValue={this.state.address}
                style={styles.input}
                onChangeText={(text) => this.setState({ address: text })}
              />
              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              <TextInput

                placeholder="City"
                placeholderColor="#fff"
                defaultValue={this.state.city}
                style={styles.input}
                onChangeText={(text) => this.setState({ city: text })}
              />
              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

             <TextInput

                  placeholder="Region"
                  placeholderColor="#fff"
                  defaultValue={this.state.region}
                  style={styles.input}
                  onChangeText={(text) => this.setState({ region: text })}
                />
                <View style={styles.divider} ></View>


              <Button
                buttonStyle={styles.secNextButton}
                disabled={!this.state.headline || !this.state.description || !this.state.city || !this.state.address || !this.state.region}
                onPress={() => this.setState({ screen: 'four' })}
                title="Next"
              />
            </KeyboardAwareScrollView>}
        </View>

      )
    }
    else if (this.state.screen === 'four') {


      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'three' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>


          {


            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 35 }} >
                <Text style={styles.title}>Give us quick details about your hostel. </Text>
              </View>

              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>Wifi</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.wifi ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ wifi: !this.state.wifi })}
                  value={this.state.wifi}
                />
              </View>

              <View style={styles.divider} ></View>


              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>TV room</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.tv_room ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ tv_room: !this.state.tv_room })}
                  value={this.state.tv_room}
                />
              </View>

              <View style={styles.divider} ></View>


              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>Car park</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.car_park ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ car_park: !this.state.car_park })}
                  value={this.state.car_park}
                />
              </View>

              <View style={styles.divider} ></View>


              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>Gym</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.gym ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ gym: !this.state.gym })}
                  value={this.state.gym}
                />
              </View>

              <View style={styles.divider} ></View>


              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>Laundry</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.laundry ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ laundry: !this.state.laundry })}
                  value={this.state.laundry}
                />
              </View>

              <View style={styles.divider} ></View>

              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <Text style={styles.label}>Study room</Text>
                <Switch
                  trackColor={{ false: "gainsboro", true: "#E7C654" }}
                  thumbColor={this.state.study_room ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.setState({ study_room: !this.state.study_room })}
                  value={this.state.study_room}
                />
              </View>

              <View style={styles.divider} ></View>
              <Button
                buttonStyle={styles.secNextButton}
                //disabled={!this.state.headline || !this.state.description || !this.state.location }
                onPress={() => this.setState({ screen: 'five' })}
                title="Next"
              />
            </KeyboardAwareScrollView>}
        </View>

      )
    }
    else if (this.state.screen === 'five') {


      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'four' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>

          {
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 35 }} >
                <Text style={styles.title}>Almost done, we need to know the type of bedrooms and bathrooms you have available </Text>
              </View>

              <Text style={styles.label}>How many people can it accomodate?</Text>

                  <TextInput

                    placeholder=""
                    placeholderColor="#fff"
                    defaultValue={this.state.accomodates}
                    style={styles.input}
                    onChangeText={(text) => this.setState({ accomodates: text })}
                  />
                  <View style={styles.divider} ></View>
              
              <Text style={styles.label}>How many bathrooms do you have?</Text>

              <TextInput

                placeholder=""
                placeholderColor="#fff"
                defaultValue={this.state.bathroom_number}
                style={styles.input}
                onChangeText={(text) => this.setState({ bathroom_number: text })}
              />
              <View style={styles.divider} ></View>


                              <Text style={styles.label}>How many bedrooms do you have?</Text>

                <TextInput

                  placeholder=""
                  placeholderColor="#fff"
                  defaultValue={this.state.bedroom_number}
                  style={styles.input}
                  onChangeText={(text) => this.setState({ bedroom_number: text })}
                />
                <View style={styles.divider} ></View>
              <Text style={styles.label}></Text>
              <Text style={styles.label}>Bathroom</Text>
              <Text style={styles.label}></Text>

              <View style={styles.switchColumn}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bathroom_value}
                    status={this.state.bathroom_value === 'private' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bathroom_value: 'private' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>Private</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bathroom_value}
                    status={this.state.bathroom_value === 'shared' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bathroom_value: 'shared' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>shared</Text>
                </View>
              </View>
              <Text style={styles.label}></Text>

              <View style={styles.divider} ></View>


              <Text style={styles.label}></Text>
              <Text style={styles.label}>Bedroom</Text>
              <Text style={styles.label}></Text>

              <View style={styles.bed}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bedroom_value}
                    status={this.state.bedroom_value === 'single' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bedroom_value: 'single' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>Single</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bedroom_value}
                    status={this.state.bedroom_value === 'duo' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bedroom_value: 'duo' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>Duo</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bedroom_value}
                    status={this.state.bedroom_value === 'trio' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bedroom_value: 'trio' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>Trio</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <RadioButton
                    value={this.state.bedroom_value}
                    status={this.state.bedroom_value === 'quatrio' ? 'checked' : 'unchecked'}
                    color={'#E7C654'}
                    onPress={() => { this.setState({ bedroom_value: 'quatrio' }); }}
                  />
                  <Text style={{ fontSize: 20, fontFamily: 'Baloo-Paaji-Medium', color: 'grey' }}>quatrio</Text>
                </View>
              </View>
              <Text style={styles.label}></Text>

              <View style={styles.divider} ></View>
              <Button
                buttonStyle={styles.secNextButton}
                // disabled={!this.state.headline || !this.state.description || !this.state.location }
                onPress={() => { this.setState({ screen: 'six' });this.postProperties();}}
                title="Next"
              />
            </KeyboardAwareScrollView>}
        </View>

      )
    }

    else if (this.state.screen === 'six') {
      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'five' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>
          {
            <View Style={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 5 }} >
                <Text style={styles.title}>Kindly post few images of your property to complete the listing </Text>
              </View>
              <Text style={styles.label}></Text>
              <Text style={styles.label}>Please select at least 6 images and a limit of 20 images</Text>
              <Text style={styles.label}></Text>

              <View>
              
               <Button
                    buttonStyle={styles.secNextButton}
                    //disabled={!this.state.found}
                    onPress={() => {this.props.navigation.navigate('Images');this.setState({screen:'one'})}}
                    title="Add Photos"
                  />
              </View>
              <Text style={styles.label}></Text>

              <View style={styles.divider} ></View>
            </View>}
        </View>

      )
    }
    else if (this.state.screen === 'seven') {
      return (
        <View style={styles.container}>
          <View style={styles.backAndSave}>
            <TouchableHighlight
              onPress={() => this.setState({ screen: 'six' })}
              style={styles.back}>
              <AntDesign color='black' size={20} name="left" />
            </TouchableHighlight>

          </View>


          {
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
            
              <Text style={styles.label}></Text>

              <Text style={styles.label}>Your Hostel/Apartment was succesfully created</Text>

              <View style={styles.divider} ></View>




              <Button
                buttonStyle={styles.secNextButton}
                // disabled={!this.state.headline || !this.state.description || !this.state.location }
                onPress={() => this.props.navigation.navigate('HMnav', {screen: 'ManagerProperty'})}
                title="Done"
              />




            </KeyboardAwareScrollView>}
        </View>

      )
    }
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




export default HostingScreen;