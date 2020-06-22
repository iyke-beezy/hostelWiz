import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, AsyncStorage, Dimensions } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { Button } from 'react-native-elements';
import ImageBrowser from '../ImageBrowser';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

var images = []
export default class ImageBrowserScreen extends Component {
  static navigationOptions = ({ navigation, route }) => {
    // const { submit } = route.params;
    return {
      headerTitle: "Choose Images",
    }
  };
  state = {
    photos: [],
    done: false
  }

  componentDidMount() {
    //console.log(this.props.route.params)
    // this.props.navigation.setParams({ submit: this._onSubmit });
  }


  imagesCallback = (selectedPhotos) => {
    const { navigation } = this.props;
    navigation.setParams({ loading: true });
    let photos = []
    selectedPhotos.map(async (photo) => {
      const compressed = await this._processImageAsync(photo.uri)
      photos.push({
        uri: compressed.uri,
        name: photo.filename,
        type: photo.mediaType        
      })
      images = photos
      //console.log(photos)
    })
    this.setState({ photos, done: true })
  };

  async _processImageAsync(uri) {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 1000 } }],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );
    return file;
  }

  updateHandler = (count, onSubmit) => {
    this.props.navigation.setOptions({
      headerTitle: `Selected ${count} files`,
      //headerRight: this._onSubmit,
    });
    onSubmit()
  };

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  _onSubmit = async () => {
    const { photos } = this.state
    console.log(photos)
    await AsyncStorage.setItem("photos", JSON.stringify(photos));
    this.props.navigation.navigate("ImageManagement");
    //console.log(this.state.photos)
  }

  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <View style={[styles.flex, styles.container, { backgroundColor: 'white' }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
          <Button
            onPress={() => this._onSubmit()}
            title="Done"
            disabled={!this.state.done}
            buttonStyle={{
              height: screenHeight * 0.07,
              borderRadius: 5,
              backgroundColor: "#E7C654",
              //alignSelf: 'flex-end',
              width: screenWidth * 0.25
            }}
          />
        </View>
        <ImageBrowser
          max={20}
          onChange={this.updateHandler}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    position: 'relative'
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
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});
