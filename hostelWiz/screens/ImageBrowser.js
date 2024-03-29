import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import ImageTile from './ImageTile'

const { width } = Dimensions.get('window');
var SelectedImages = []

export default class ImageBrowser extends React.Component {
  is_mounted = false
  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    numColumns: null,
    photos: [],
    selected: [],
    isEmpty: false,
    after: null,
    hasNextPage: true
  }

  componentDidMount() {
    this.is_mounted = true
    this.setScreenOrientation()
  }

  setScreenOrientation = async () => {
    await this.getPermissionsAsync();
    //ScreenOrientation.addOrientationChangeListener(this.onOrientationChange);
    // const orientation = await ScreenOrientation.getOrientationLockAsync();
    // console.log(ScreenOrientation.OrientationLock)
    if (this.is_mounted) {
      const numColumns = 4;
      this.setState({ numColumns });
      this.getPhotos();
    }
  }

  componentWillUnmount(){
    this.is_mounted = false
  }

  getPermissionsAsync = async () => {
    const { status: camera } = await Permissions.askAsync(Permissions.CAMERA);
    const { status: cameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraPermission: camera === 'granted',
      hasCameraRollPermission: cameraRoll === 'granted'
    });
  }

  onOrientationChange = ({ orientationInfo }) => {
    ScreenOrientation.removeOrientationChangeListeners();
    ScreenOrientation.addOrientationChangeListener(this.onOrientationChange);
    const numColumns = this.getNumColumns(orientationInfo.orientation);
    this.setState({ numColumns });
  }

  getNumColumns = orientation => orientation.indexOf('PORTRAIT') !== -1 ? 4 : 7;

  selectImage = (index) => {
    //console.log(index)
    let newSelected = Array.from(this.state.selected);
    if (newSelected.indexOf(index) === -1) {
      newSelected.push(index);
    } else {
      const deleteIndex = newSelected.indexOf(index);
      newSelected.splice(deleteIndex, 1);
    }
    if (newSelected.length > this.props.max) return;
    //if (!newSelected) newSelected = [];
    SelectedImages = newSelected
    this.setState({ selected: newSelected });
    //console.log(SelectedImages)
    this.props.onChange(SelectedImages.length, () => this.prepareCallback());
  }

  getPhotos = async () => {
    const params = {
      first: this.props.loadCount || 50,
      assetType: 'Photos',
      sortBy: ['creationTime']
    };
    if (this.state.after) params.after = this.state.after;
    if (!this.state.hasNextPage) return;
    MediaLibrary
      .getAssetsAsync(params)
      .then(this.processPhotos);
  }

  processPhotos = (data) => {
    if (data.totalCount) {
      if (this.state.after === data.endCursor) return;
      const uris = data.assets;
      this.setState({
        photos: [...this.state.photos, ...uris],
        after: data.endCursor,
        hasNextPage: data.hasNextPage
      });
      
      //console.log(this.state.photos)
      //console.log(this.state.photos[0])
    } else {
      this.setState({ isEmpty: true });
    }
  }
  getItemLayout = (data, index) => {
    const length = width / 4;
    return { length, offset: length * index, index };
  }

  prepareCallback() {
    //console.log('success')
    const {photos} = this.state;
    const selected = SelectedImages
    const selectedPhotos = selected.map(i => photos[i]);
    //const assetsInfo = Promise.all(selectedPhotos.map(i => MediaLibrary.getAssetInfoAsync(i)));
    //assetsInfo.then(photos => console.log(photos))
    //console.log(assetsInfo)
    //console.log(selectedPhotos)
    //console.log(photos)
    this.props.callback(selectedPhotos);
  }

  renderImageTile = ({ item, index }) => {
    const selected = this.state.selected.indexOf(index) !== -1;
    const selectedItemNumber = this.state.selected.indexOf(index) + 1;
    return (
      <ImageTile
        selectedItemNumber={selectedItemNumber}
        item={item}
        index={index}
        selected={selected}
        selectImage={this.selectImage}
        renderSelectedComponent={this.props.renderSelectedComponent}
      />
    )
  }

  renderPreloader = () => this.props.preloaderComponent || <ActivityIndicator size="large" />;

  renderEmptyStay = () => this.props.emptyStayComponent || null;

  renderImages() {
    return (
      <FlatList
        data={this.state.photos}
        numColumns={this.state.numColumns}
        key={this.state.numColumns}
        renderItem={this.renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => { this.getPhotos() }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={this.state.isEmpty ? this.renderEmptyStay() : this.renderPreloader()}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    )
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (!hasCameraPermission) {
      return this.props.noCameraPermissionComponent || null;
    }

    return (
      <View style={styles.container}>
        {this.state.photos ?
          this.renderImages()
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
