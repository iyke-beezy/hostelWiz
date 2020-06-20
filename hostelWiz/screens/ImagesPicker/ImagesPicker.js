import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import ImageBrowser from '../ImageBrowser';

export default class ImageBrowserScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Choose Photos",
    headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ fontFamily: 'Baloo-Paaji-Medium', fontSize: 20, margin: 10 }}>Back</Text></TouchableOpacity>,
    headerRight: <TouchableOpacity title={'Done'} onPress={() => this._onSubmit()}><Text style={{ fontFamily: 'Baloo-Paaji-Medium', fontSize: 20, margin: 10 }}>      Done
        </Text>
    </TouchableOpacity>
  });

  state = {
    photos: []
  }

  imagesCallback = (selectedPhotos) => {
    const { navigation } = this.props;
    navigation.setParams({ loading: true });
    let photos = []
    selectedPhotos.map(photo => {
      photos.push(photo.uri)
    })
    this.setState({ photos: [...this.state.photos, ...photos] })
    console.log(photos)
    //this.setState({ photos: cPhotos })
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
    this.props.navigation.setParams({
      headerTitle: `Selected ${count} files`,
      headerRight: onSubmit,
    });
  };

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  _onSubmit = () => {
    const {photos} = this.state
    await AsyncStorage.setItem("photos", JSON.stringify(photos));
    navigation.navigate("HostingPage")
  }


  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <View style={[styles.flex, styles.container]}>
        <ImageBrowser
          max={4}
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
