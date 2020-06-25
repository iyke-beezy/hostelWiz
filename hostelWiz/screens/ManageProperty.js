import * as React from 'react';
import { Keyboard, StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, ScrollView, AsyncStorage, Dimensions } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, EvilIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Card, Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import styles from './explore-styles'
import { getMyProperties,getHostelManager } from '../api';


class ManageProperty extends React.Component {
  state = {
    searchQuery: '',
    rating: 2,
    save: false,
    property: [],
    token: null,
    isManager:false,
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
      // require('./assets/images/hostel.jpg'),          // Local image
    ]
  };

  componentDidMount() {
    this.getToken();
    this.getManager();
  }
  getToken = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let data = JSON.parse(userToken)
      console.log(data)
      this.setState({token: data})
      this.getProperties();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  getProperties = async () => {
    try {
      const data = await getMyProperties(this.state.token);
      console.log(data); 
      this.setState({ property: data.result, save: true }); 
    }
    catch (err) {
      console.log(err)
    }
    //this.setState({property:data});


  }

  getManager = async () => {
    try {
      console.log(this.state.token);
      const datas = await getHostelManager(this.state.token);
      console.log(datas); 
    
    }
    catch (err) {
      console.log(err)
    }
    //this.setState({property:data});


  }

  save = () => {
    this.setState({ save: !this.state.save })
  }


  getImages = images => {
    var imagesSet = []
    for (var i = 0; i < images.length; i++) {
      images.map(image => {
        imagesSet.push("https://hostelwiz.herokuapp.com" + image.image)
      })
    }
    //console.log(imagesSet)
    return imagesSet
  }

  _onChangeSearch = query => this.setState({ searchQuery: query });


  render() {
    return (

      <View style={styles.container}>
        {

          this.state.property.length == 0 || this.state.property === undefined ? (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: 'grey' }}> You have not posted any properties</Text>
            </View>

          )
            :
            (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.belowSearchBar}>

                  <Text style={{ fontSize: 25, fontFamily: 'Baloo-Paaji-Medium' }}>
                    My properties
                      </Text>
                  {/* Max card details */}
                  {this.state.property.map(property => {
                    return (
                      <View key={property.id} style={styles.maxCardComponent}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('details', { property: property, token: this.state.token, save: this.state.save })}>
                          <View style={[styles.maxCard]}>

                            <SliderBox 
                            dotColor={'orange'} 
                            onCurrentImagePressed={() => this.props.navigation.navigate('details', { property: property, token: this.state.token, save: this.state.save })} 
                            autoplay={true} 
                            sliderBoxHeight={screenHeight / 4 - 5} 
                            images={this.getImages(property.images)} 
                            ImageComponentStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, width: screenWidth * 0.9, marginLeft: - screenWidth * 0.1 }} >
                            </SliderBox>


                            <TouchableOpacity
                              onPress={() => this.save()}
                              style={styles.editButton}>
                              <View>
                             
                              <FontAwesome5 color='white' style={{ marginTop: 7 }} size={25} name="pen" />
                                
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => this.save()}
                              style={styles.deleteButton}>
                              <View>
                                <EvilIcons color='white' style={{ marginTop: 7 }} size={35} name="trash" />
                                 

                              </View>
                            </TouchableOpacity>

                            <View style={styles.maxCardTextArea}>
                              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', }}>
                                <View>
                                  <Text style={styles.title}>
                                    {property.name}
                                  </Text>
                                </View>
                                <View>
                                  <Text style={styles.price}>
                                    Ghc {property.price}
                                  </Text>
                                  <Text style={{ color: 'grey', fontFamily: 'Baloo-Paaji' }} >/per day</Text>
                                </View>
                              </View>
                              <View style={styles.description}>
                                <View>
                                  <Text style={{ color: 'grey', fontSize: 10, fontFamily: 'Baloo-Paaji' }} >{property.location} , 0.2 km from your location</Text>
                                </View>


                              </View>

                              <View style={styles.rating}>
                                <AntDesign size={20} color={property.avg_rating > 0 ? 'orange' : Colors.tabIconDefault} name="star" />
                                <AntDesign size={20} color={property.avg_rating > 1 ? 'orange' : Colors.tabIconDefault} name="star" />
                                <AntDesign size={20} color={property.avg_rating > 2 ? 'orange' : Colors.tabIconDefault} name="star" />
                                <AntDesign size={20} color={property.avg_rating > 3 ? 'orange' : Colors.tabIconDefault} name="star" />
                                <AntDesign size={20} color={property.avg_rating > 4 ? 'orange' : Colors.tabIconDefault} name="star" />
                              </View>

                            </View>
                          </View>
                        </TouchableHighlight>
                      </View>
                    );

                  })}



                </View>
              </ScrollView>
            )}

      </View>

    );
  }

}

export default ManageProperty;