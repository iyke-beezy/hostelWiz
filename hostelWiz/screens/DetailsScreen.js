import * as React from 'react';
import { Keyboard, StatusBar, Image, TouchableOpacity, Animated, ScrollView, ImageBackground, Text, View, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons';
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
              <Text style={[styles.mainTitle, { marginBottom: -8 }]}>Grand Royal Hostel</Text>
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
          <View style={{ paddingRight: screenWidth * 0.07, flex: 1, flexDirection: 'column', paddingBottom: 10 }}>
            <Text style={styles.detailText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            <Text style={styles.detailTitleText}>Single Room                          [YES]</Text>
            <Text style={styles.detailTitleText}>2 in a Room                           [YES]</Text>
            <Text style={styles.detailTitleText}>3 in a Room                           [YES]</Text>
            <Text style={styles.detailTitleText}>Study Room                           [YES]</Text>
          </View>
        </ScrollView>

        <View style={styles.detailDivider}></View>

        <View style={styles.spaceBelow}>
          <View style={styles.spaceBelowContent}>
            <TouchableOpacity style={styles.callButton}>
              {/* <Button
                title='Call Now'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} /> */}
                <AntDesign name="phone" size={20} color="black" />
            </TouchableOpacity>
            <View style={styles.detailPriceAndRating}>
              <Text style={{ fontSize: 15, fontFamily: 'Baloo-Paaji' }} >Ghc 40.00</Text>
            </View>
            <TouchableOpacity style={styles.rateButton}>
              {/* <Button
                title='Get Directions'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} /> */}
                <Feather name="map-pin" size={20} color="black" />
            </TouchableOpacity>

          </View>
        </View>
      </View>

    );
  }
}





export default DetailsScreen;