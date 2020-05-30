import * as React from 'react';
import {Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Card} from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { SliderBox } from "react-native-image-slider-box";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
const screenHeight = Math.round(Dimensions.get('window').height);
import { getProperties , searchProperty} from '../api';
import styles from './explore-styles'


class ExploreScreen extends React.Component {
  
 
  state = {
      searchQuery: '',
      rating: 2,
      save: false,
      isReady: false,
      property:[],
      //token:1,
      token:this.props.route.params.t,
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        "https://hostelwiz.herokuapp.com/media/hostelpics/Property%20object%20(3)/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg", // Network image
        // require('./assets/images/hostel.jpg'),          // Local image
      ]
   
  }
 

  componentDidMount() {
    this.getProperties();
  }

  getProperties = async () => {
    const data = await getProperties();
    this.setState({property:data});
    console.log(this.state.property)
    
  }

  getSearchedProperty = async (location) => {
    const searchedData = await searchProperty(location);
    this.setState({property:searchedData});
    console.log(searchedData)
  }

  save = () => {
    this.setState({ save: !this.state.save })
  }

  _onChangeSearch = query => { 
    this.setState({searchQuery: query })
   this.getSearchedProperty(this.state.searchQuery)
  };

  async _cacheResourcesAsync() {
    const images = ["https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
      "https://hostelwiz.herokuapp.com/media/hostelpics/Property%20object%20(3)/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg",
      require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')];

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
                        Explore Hostel Wiz
                      </Text>

                      {/* Mini Card details */}
                      <View style={styles.miniCardComponent}>
                        <Card containerStyle={styles.miniCard}
                          image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}>
                          <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'Baloo-Paaji-Medium' }}>
                            Explore Apartments
                    </Text>
                        </Card>
                        <Card containerStyle={styles.miniCard}
                          image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}
                          imageStyle={{ borderRadius: 10 }}>
                          <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'Baloo-Paaji-Medium' }}>
                            Explore Hostels
                    </Text>
                        </Card>
                      </View>

                      {/* Max card details */}
                      { this.state.property.map( property => {
                        return (
                          <View key={property.id} style={styles.maxCardComponent}>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('details',{property:property,token:this.state.token})}>
                            <View style={[styles.maxCard]}>
                          
                              <SliderBox dotColor={'orange'} onCurrentImagePressed={() => this.props.navigation.navigate('details',{property:property,token:this.state.token})} autoplay={true} sliderBoxHeight={screenHeight / 4 - 5} images={this.state.images} >
                              </SliderBox>
                            
                    
                              <TouchableOpacity
                                onPress={() => this.save()}
                                style={styles.saveButton}>
                                <View>
                                  {
                                    this.state.save ? <AntDesign color='red' style={{ marginTop: 7 }} size={25} name="heart" />
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
                                    <Text style={{ color: 'grey', fontSize: 10, fontFamily: 'Baloo-Paaji'}} >{property.location} , 0.2 km from your location</Text>
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
                  :


                  //screen to show when user searches for hoste
                  <ScrollView>
                    <View style={styles.belowSearchBar}>

                      {/* Max card details */}
                      { this.state.property.map( property => {
                        return (
                          <View style={styles.maxCardComponent}>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('details')}>
                            <View style={[styles.maxCard]}>
                              <SliderBox dotColor={'orange'} onCurrentImagePressed={() => this.props.navigation.navigate('details')} autoplay={true} sliderBoxHeight={screenHeight / 4 - 5} images={property.images} >
                              </SliderBox>
                              <TouchableOpacity
                                onPress={() => this.save()}
                                style={styles.saveButton}>
                                <View>
                                  {
                                    this.state.save ? <AntDesign color='red' style={{ marginTop: 7 }} size={25} name="heart" />
                                      :
                                      <AntDesign color='white' style={{ marginTop: 7 }} size={25} name="heart" />
                                  }
  
                                </View>
                              </TouchableOpacity>
  
                              <View style={styles.maxCardTextArea}>
                                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', }}>
                                  <View>
                                    <Text style={styles.title}>
                                      Grand Royal Hostels
                                  </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.price}>
                                      Ghc 120.00
                                    </Text>
                                    <Text style={{ color: 'grey' }} >/per day</Text>
                                  </View>
                                </View>
                                <View style={styles.description}>
                                  <View>
                                    <Text style={{ color: 'grey', fontSize: 10}} >Second otwe street , 0.2 km from your location</Text>
                                  </View>
  
  
                                </View>
  
                                <View style={styles.rating}>
                                  <AntDesign size={20} color={this.state.rating > 0 ? 'orange' : Colors.tabIconDefault} name="star" />
                                  <AntDesign size={20} color={this.state.rating > 1 ? 'orange' : Colors.tabIconDefault} name="star" />
                                  <AntDesign size={20} color={this.state.rating > 2 ? 'orange' : Colors.tabIconDefault} name="star" />
                                  <AntDesign size={20} color={this.state.rating > 3 ? 'orange' : Colors.tabIconDefault} name="star" />
                                  <AntDesign size={20} color={this.state.rating > 4 ? 'orange' : Colors.tabIconDefault} name="star" />
                                </View>
  
                              </View>
                            </View>
                          </TouchableHighlight>
                        </View>
  
  
                        );})}
                     
                    </View>
                  </ScrollView>
              }
            </View >)

      );
    }
  }
}

export default ExploreScreen;