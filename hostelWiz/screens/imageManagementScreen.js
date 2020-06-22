import * as React from 'react';
import { StyleSheet, AsyncStorage, ScrollView, Switch, Picker, Text, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { post_images } from '../api';
import axios from 'axios';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
var Images = []

class ImageManagementScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      hasCameraRollPermission: null,
      image: [],
      photos: [],
      id: 4
    };
  }

  getPhotos = async () => {
    try {
      let images = await AsyncStorage.getItem("photos");
      let photos = JSON.parse(images)
      if (photos) this.setState({
        photos, screen: 'six',// found: true
      })
      console.log(photos)
    }
    catch (error) {
      console.log(error)
    }
  }

  postPhotos = async () => {

    for (var i = 0; i < this.state.photos.length; i++) {
      let body = new FormData();
      console.log(this.state.photos[i])
      // body.append('image', this.state.photos[i].uri,this.state.photos[i].name);
      body.append('property', this.state.id);
      let token = await AsyncStorage.getItem("userToken");
      // body.append('image', {uri: this.state.photos[i],name:Z,filename :Z});
      // body.append('Content-Type', 'image/png')
      let url = 'https://hostelwiz.herokuapp.com/hostelwiz/images/';
      axios.post(url, body, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `Token ${token}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
    }
    //const upload = await post_images(body,token)
    //console.log(upload)
  }

  renderImage(item, i) {
    return (
      <Image
        style={{ height: 100, width: 100, margin: 10 }}
        source={{ uri: item }}
        key={i}
      />
    )
  }
  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  toggleSwitch = () => {
    this.setState({ wifi: !this.state.wifi });
  }

  componentDidMount() {
    // AsyncStorage.removeItem("photos")
    //  this.getPhotos()
    // this._unSubscribe = this.props.navigation.addListener('blur', () => {
    console.log(Images)
    //  });
  }

  UNSAFE_componentWillMount() {
    this._unSubscribe;
  }

  render() {

    // const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    //const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;



    return (
      <View style={styles.container}>
        <View style={styles.backAndSave}>
          <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}
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
              {/* <ImageBrowser
                  max={4}
                  onChange={this.updateHandler}
                  callback={this.imagesCallback}
                  renderSelectedComponent={this.renderSelectedComponent}
                  emptyStayComponent={emptyStayComponent}
                  noCameraPermissionComponent={noCameraPermissionComponent}
                /> */}
              <Button
                buttonStyle={styles.secNextButton}
                //disabled={!this.state.found}
                onPress={() => this.props.navigation.navigate('Images')}
                title="Add Photos"
              />

              <Text style={styles.label}></Text>
              <ScrollView style={{ height: screenHeight * 0.19 }} >
                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
                  {this.state.photos.map((item, i) => this.renderImage(item.uri, i))}
                </View>

              </ScrollView>


            </View>
            <Text style={styles.label}></Text>

            <View style={styles.divider} ></View>

            <Button
              buttonStyle={styles.secNextButton}
              // disabled={!this.state.headline || !this.state.description || !this.state.location }
              onPress={() => { this.setState({ screen: 'seven' }); this.postPhotos() }}
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




export default ImageManagementScreen;