import * as React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Card } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { SliderBox } from "react-native-image-slider-box";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
import { filterProperty, searchProperty, saveProperties, getSavedProperties, getUser } from '../../api';
import styles from './styles'

class Hostels extends React.Component {

  state = {
    savedProperties: [],
    searchQuery: '',
    rating: 2,
    save: false,
    isReady: false,
    property: [],
    searchedProp: [],
    filter: "hostel",
    token: null,//this.props.route.params.t,
    images: [],
    responseMessage: null
  }

  componentDidMount() {
    //console.log(this.state.token)
    
    this.getToken();
    this.getProperties();
  }
  async getToken() {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let token = JSON.parse(userToken)
      this.setState({token})
      this.getSaveProperties();
      //console.log(this.state.token)
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  getSaveProperties = async () => {
    try {
      const data = await getSavedProperties(this.state.token);
      this.setState({ savedProperties: data.result });
      //console.log(this.state.savedProperties)
      //console.log(this.state.token.token)
    } catch (err) {
      console.log(err.errMessage)
    }
  }
/* Get Properties based on filter */
  getProperties = async () => {
    try {
      const data = await filterProperty(this.state.filter);
      //console.log(data)
      this.setState({ property: data.result });
      //console.log(this.state.property)
    } catch (err) {
      console.log(err.errMessage)
    }

  }
  

  saveProperty = async (property_id) => {
    try {
      const user_id = await this.getUser()
      const data = await saveProperties(property_id, this.state.token, user_id);
      return data
      //console.log("save me")
    } catch (err) {
      console.log(err)
    }

  }

  getUser = async () => {
    try {
       const profile = await getUser(this.state.token)
       return profile.user.id
    }catch(err){
      console.log(err)
      return null
    }
    //console.log(profile)
  }

  getSearchedImages = images => {
    var imagesSet = []
    
      images.map(image => {
        imagesSet.push("https://hostelwiz.herokuapp.com" + image.image)
      })
    
    //console.log(imagesSet)
    return imagesSet

  }

  getImages = images => {
    var imagesSet = []

      images.map(image => {
        imagesSet.push("https://hostelwiz.herokuapp.com" + image.image)
      })
    
    //console.log(imagesSet)
    return imagesSet

  }
  getSearchedProperty = async () => {
    try {
      const searchedData = await searchProperty(this.state.searchQuery);
      this.setState({ searchedProp: searchedData.result, responseMessage: searchedData.message });
      //console.log(searchedData)
    }
    catch (err) {
      this.setState({ responseMessage: null })
      console.log(err.errMessage)
    }
  }

  save = (pr) => {
    //this.setState({ save: !this.state.save });
    if(this.checkIfIdExistInSave(pr)){
          
    }
    this.saveProperty(pr);
  }

  _onChangeSearch = query => {
    this.setState({ searchQuery: query })
    this.getSearchedProperty()
  };

  async _cacheResourcesAsync() {
    const images = ["https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
      "https://hostelwiz.herokuapp.com/media/hostelpics/Property%20object%20(3)/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg",
      require('../../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }


  render() {
    const { searchQuery } = this.state;
    {
      return (
        !this.state.isReady ? (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        )

          :
          (
            <View style={styles.container}>
              <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <View style={styles.SearchBar}>
                  <Searchbar
                    placeholder="Search"
                    onChangeText={this._onChangeSearch}
                    value={searchQuery}
                  />
                </View>
              </ScrollView>
              {
                this.state.searchQuery === '' ?
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.belowSearchBar}>
                      <Text style={{ fontSize: 25, fontFamily: 'Baloo-Paaji-Medium' }}>
                        Explore Hostels
                      </Text>

                      {/* Max card details */}
                      {this.state.property.map(property => {
                        return (
                          <View key={property.id} style={styles.maxCardComponent}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('details', { property: property, token: this.state.token, save: this.checkIfIdExistInSave(property.id) })}>
                              <View style={[styles.maxCard]}>

                                <SliderBox
                                  dotColor={'orange'}
                                  onCurrentImagePressed={() => this.props.navigation.navigate('details', { property: property, token: this.state.token, save: this.checkIfIdExistInSave(property.id) })}
                                  autoplay={true}
                                  sliderBoxHeight={screenHeight / 4 - 5}
                                  images={this.getImages(property.images)}
                                  ImageComponentStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, width: screenWidth * 0.9, marginLeft: - screenWidth * 0.1 }}
                                />

                                <TouchableOpacity
                                  onPress={() => this.save(property.id)}
                                  style={styles.saveButton}>
                                  <View>
                                    {
                                      this.checkIfIdExistInSave(property.id) ? <AntDesign color='red' style={{ marginTop: 7 }} size={25} name="heart" />
                                        :
                                        <AntDesign color='white' style={{ marginTop: 7 }} size={25} name="heart" />
                                    }

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
                                    <Text> ({property.no_of_ratings}) </Text>
                                  </View>

                                </View>
                              </View>
                            </TouchableHighlight>
                          </View>
                        );

                      })}



                    </View>
                  </ScrollView>
                  :
                  //screen to show when user searches for hoste
                  <ScrollView>
                    <View style={styles.belowSearchBar}>

                      {/* Max card details */}
                      {this.state.responseMessage ? (
                        this.state.searchedProp.map(property => {
                          return (
                            <View key={property.id} style={styles.maxCardComponent}>
                              <TouchableHighlight onPress={() => this.props.navigation.navigate('details', { property: property, token: this.state.token })}>
                                <View style={[styles.maxCard]}>

                                  <SliderBox dotColor={'orange'} onCurrentImagePressed={() => this.props.navigation.navigate('details', { property: property, token: this.state.token })} autoplay={true} sliderBoxHeight={screenHeight / 4 - 5} images={this.getSearchedImages(property.images)} >
                                  </SliderBox>


                                  <TouchableOpacity
                                    onPress={() => this.save()}
                                    style={styles.saveButton}>
                                    <View>
                                      {
                                        this.checkIfIdExistInSave(property.id) ? <AntDesign color='red' style={{ marginTop: 7 }} size={25} name="heart" />
                                          :
                                          <AntDesign color='white' style={{ marginTop: 7 }} size={25} name="heart" />
                                      }

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

                          )
                        }))
                        : (
                          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ flex: 1 }}>No data found</Text>
                          </View>
                        )
                      }

                    </View>
                  </ScrollView>

              }
            </View >)

      );
    }
  }
  checkIfIdExistInSave = (property_id) => {
    var status = false
    this.state.savedProperties.map(item => {
      if (item.property_id === property_id) {
        status = true
      }
    })
    return status
  }
}

export default Hostels;