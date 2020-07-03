import * as React from 'react';
import { Modal, Image, TouchableOpacity, ScrollView, Linking, Text, View, Alert, AsyncStorage, Dimensions, TouchableHighlight } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import styles from "../style";
import Colors from '../constants/Colors';
const screenWidth = Math.round(Dimensions.get('window').width);
import { rateProperties, getHostelManager } from '../api'

class DetailsScreen extends React.Component {

  state = {
    rating: 2,
    save: this.props.route.params.save,
    hostel: this.props.route.params.property,
    token: null,
    newRating: 0,
    modalVisible: false,
  };
  componentDidMount() {
    this.getToken()
  }
  save = () => {
    this.setState({ save: !this.state.save })
  }
  async getToken() {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let token = JSON.parse(userToken)
      this.setState({ token })
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  rate = async () => {
    const hostel = this.state.hostel
    const data = await rateProperties(hostel.id, this.state.token, this.state.newRating);

  }

  getHostelManager = async (id) => {
    try {
      const data = await getHostelManager(this.state.token, id)
      return data.user.contact
    }
    catch(err) {
      console.log(err)
      return null
    }
  }

  getImages = images => {
    var imagesSet = []
    for (var i = 0; i < images.length; i++) {
      images.map(image => {
        if (image.image.startsWith("https://hostelwiz.herokuapp.com")) {
          imagesSet.push(image.image)
        }
        else {
          imagesSet.push("https://hostelwiz.herokuapp.com" + image.image)
        }
      })
    }
    console.log(imagesSet)
    return imagesSet
  }


  render() {
    const property = this.state.hostel
    return (
      <View style={styles.detailContainer} >
        <ScrollView stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>

          <View style={styles.detailHead}>
            <View style={styles.backAndSave}>
              <TouchableHighlight
                onPress={() => this.props.navigation.goBack()}
                style={styles.back}>
                <AntDesign color='black' size={15} name="left" />
              </TouchableHighlight>
              <TouchableOpacity
                onPress={() => this.save()}
                style={styles.save}
              >
                {
                  this.state.save ? <Ionicons name="md-heart" size={15} color="red" />
                    :
                    <Ionicons name="md-heart-empty" size={15} color="black" />
                }

              </TouchableOpacity>
            </View>
            <View style={styles.detailTitle}>
              <Text style={[styles.mainTitle, { marginBottom: -8 }]}>{this.state.hostel.name}</Text>
              <Text style={styles.subTitle}>{this.state.hostel.location}</Text>
              <View style={styles.rateNow}>
                <TouchableOpacity onPress={this.setState({modalVisible: !this.state.modalVisible})}>
                  <Text> Rate Now</Text>
                </TouchableOpacity>
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
        </ScrollView>


        <ScrollView
          style={styles.detailScrollview}
          scrollEventThrottle={2}
          showsVerticalScrollIndicator={false}
        >
          <ScrollView style={styles.detailHeader} showsHorizontalScrollIndicator={false} horizontal={true} >
            {this.getImages(property.images).map(image => <Image key={image} style={styles.detailImages} source={{ uri: `${image}` }} />)}
          </ScrollView>
          <View style={{ paddingRight: screenWidth * 0.07, flex: 1, flexDirection: 'column', paddingBottom: 10 }}>
            <Text style={styles.detailText}>
              {this.state.hostel.description} </Text>
            <Text style={styles.detailTitleText}>Single Room                           [YES]</Text>
            <Text style={styles.detailTitleText}>2 in a Room                           [YES]</Text>
            <Text style={styles.detailTitleText}>3 in a Room                           [YES]</Text>
            <Text style={styles.detailTitleText}>Study Room                            [YES]</Text>
          </View>
        </ScrollView>

        <View style={styles.detailDivider}></View>

        <View style={styles.spaceBelow}>
          <View style={styles.spaceBelowContent}>
            <TouchableOpacity style={styles.callButton}
              onPress={async () => { 
                const phone = await this.getHostelManager(property.manager)
                Linking.openURL(`tel:${phone}`) 
                }
              }
            >
              {/* <Button
                title='Call Now'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} /> */}
              <AntDesign name="phone" size={20} color="black" />
            </TouchableOpacity>
            <View style={styles.detailPriceAndRating}>
              <Text style={{ fontSize: 15, fontFamily: 'Baloo-Paaji' }} >Ghc {this.state.hostel.price}</Text>
            </View>
            <TouchableOpacity style={styles.rateButton}>
              {/* <Button
                title='Get Directions'
                buttonStyle={{ borderRadius: 5, height: screenHeight / 15, backgroundColor: 'gold' }} /> */}
              <Feather name="map-pin" size={20} color="black" />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Rate this hostel</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { this.setState({ newRating: 1 }) }}><AntDesign size={20} color={this.state.newRating > 0 ? 'orange' : 'grey'} name="star" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ newRating: 2 }) }}><AntDesign size={20} color={this.state.newRating > 1 ? 'orange' : 'grey'} name="star" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ newRating: 3 }) }}><AntDesign size={20} color={this.state.newRating > 2 ? 'orange' : 'grey'} name="star" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ newRating: 4 }) }}><AntDesign size={20} color={this.state.newRating > 3 ? 'orange' : 'grey'} name="star" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ newRating: 5 }) }}><AntDesign size={20} color={this.state.newRating > 4 ? 'orange' : 'grey'} name="star" /></TouchableOpacity>
                  </View>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      this.rate();
                      this.toggleModal();
                    }}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

          </View>
        </View>
      </View>

    );
  }
}





export default DetailsScreen;