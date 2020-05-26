import * as React from 'react';
import { Keyboard, StatusBar, Image, TouchableOpacity, Animated, ScrollView, ImageBackground, Text, View, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import styles from "../style";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class DetailsScreen extends React.Component {

  state = {
    rating: 2,
    save: false,
  };

  save = () => {

    this.setState({ save: !this.state.save })
  }

  render() {

    return (
      <View style={styles.detailContainer} >
        <ScrollView stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <View style={styles.detailHead}>
            <View style={styles.backAndSave}>
              <TouchableHighlight
                onPress={() => this.save()}
                style={styles.back}>
                <AntDesign color='black' size={15} name="left" />
              </TouchableHighlight>
              <TouchableOpacity
                onPress={() => this.save()}
                style={styles.save}
              >
                {
                  this.state.save ? <SimpleLineIcons name="heart" size={15} color="red" />
                    :
                    <SimpleLineIcons name="heart" size={15} color="black" />
                }

              </TouchableOpacity>
            </View>
            <View style={styles.detailTitle}>
              <Text style={styles.mainTitle}>Grand Royal Hostel</Text>
              <Text style={styles.subTitle}>Second otwe street</Text>
            </View>
          </View>
        </ScrollView>


        <ScrollView
          style={styles.detailScrollview}

          scrollEventThrottle={2}
          showsVerticalScrollIndicator={false}
        >


          <ScrollView style={styles.detailHeader} showsHorizontalScrollIndicator={false} horizontal={true}  >
            <Image style={styles.detailImages} source={require('../assets/images/hostel.jpg')}>

            </Image>
            <Image style={styles.detailImages} source={require('../assets/images/hostel.jpg')}>

            </Image>
            <Image style={styles.detailImages} source={require('../assets/images/hostel.jpg')}>

            </Image>
          </ScrollView>






          <Text style={styles.detailText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
          <Text style={styles.detailTitleText}>Single Room                          [YES]</Text>
          <Text style={styles.detailTitleText}>2 in a Room                           [YES]</Text>
          <Text style={styles.detailTitleText}>3 in a Room                           [YES]</Text>
          <Text style={styles.detailTitleText}>Study Room                           [YES]</Text>



        </ScrollView>

        <View style={styles.detailDivider}></View>

        <View style={styles.spaceBelow}>
          <View style={styles.spaceBelowContent}>
            <View style={styles.rateButton}>
              <Button

                title='Call Now'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} />
            </View>
            <View style={styles.detailPriceAndRating}>
              <Text style={{ fontSize: 21 }} >Ghc 40.00</Text>
              <Text >/per night</Text>
            </View>
            <View style={styles.rateButton} >
              <Button

                title='Get Directions'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} />
            </View>

          </View>
        </View>




      </View>

    );
  }
}





export default DetailsScreen;