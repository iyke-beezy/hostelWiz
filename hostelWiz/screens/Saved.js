import * as React from 'react';
import {Keyboard,StyleSheet,TouchableHighlight, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Card,Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import styles from './explore-styles'
import { getProperties ,} from '../api';


class SavedScreen extends React.Component {


  state = {
    searchQuery: '',
    rating:2,
    save:false,
    property:[],
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
     // require('./assets/images/hostel.jpg'),          // Local image
    ]
  };

  componentDidMount() {
    this.getProperties();
  }

  getProperties = async () => {
    const data = await getProperties();
    this.setState({property:data});
    console.log(this.state.property);
    
  }

  save = () => {
    
      this.setState({save:!this.state.save}) 
  }

 


  _onChangeSearch = query => this.setState({ searchQuery: query });


    render() {
      return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.belowSearchBar}>
         

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
      </View>
      
      );
    }
  }

  
  export default SavedScreen;