import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, AsyncStorage, Button } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import ImageBrowser from '../ImageBrowser';



export default class ImageBrowserScreen extends Component {
  static navigationOptions = ({ navigation, route }) => {
    // const { submit } = route.params;
    return {
      headerTitle: "Choose Images",
      headerRight: () =>
        <Button
          //   onPress={()=> {return submit}}
          title="Done"
          color="#000"
        />

    }
  };



  state = {
    photos: []
  }

  componentDidMount() {
    //console.log(this.props.route.params)
    // this.props.navigation.setParams({ submit: this._onSubmit });
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
      headerRight: this._onSubmit,
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
    await AsyncStorage.setItem("photos", JSON.stringify(photos));
    this.props.navigation.navigate("HMnav", { screen: 'HostingPage' });
    //console.log(this.state.photos)
  }


  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <View style={[styles.flex, styles.container, { backgroundColor: 'white' }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>
              Back
            </Text>

          </TouchableOpacity>
          <Button
            onPress={() => this._onSubmit()}
            title="Done"
            color="#000"
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
