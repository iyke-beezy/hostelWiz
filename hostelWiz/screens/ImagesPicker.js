import React from 'react';
import { Button, View, Text } from 'react-native';
import ImageBrowser from './ImageBrowser';
var Images = []
export default class ImagePicker extends React.Component {
  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    numColumns: null,
    photos: [],
    selected: [],
    isEmpty: false,
    after: null,
    hasNextPage: true,
  };


  updateHandler = (count, onSubmit) => {
    // this.props.navigation.setOptions({
    //   headerTitle: count + "selected",
    //   headerRight: onSubmit,
    // });
    console.log("List Of Images"+Images);
  }

  // processPhotos = (data) => {
  //   if (data.totalCount) {
  //     if (this.state.after === data.endCursor) return;
  //     const uris = data.assets;
  //     //console.log(uris)
  //     this.setState({
  //       photos: [...this.state.photos, ...uris],
  //       after: data.endCursor,
  //       hasNextPage: data.hasNextPage,
  //     });
  //   } else {
  //     this.setState({ isEmpty: true });
  //   }
  // };

componentDidMount(){
//this._unSubscribe = this.props.navigation.addListener('blur',()=>{
console.log(Images)

}
UNSAFE_componentWillMount(){
this._unSubscribe;
}

  imagesCallback = (callback) => {
    callback.then((photos) => {
      Images = photos;
      console.log(photos);
    }).catch((e) => console.log(e))
  };

  renderSelectedComponent = (number) => (
    <View
      style={{
        paddingHorizontal: 8.6,
        paddingVertical: 5,
        borderRadius: 50,
        position: 'absolute',
        right: 3,
        bottom: 3,
        justifyContent: 'center',
        backgroundColor: '#ffa45c',
      }}>
      <Text style={{fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#5d5d5a'}}>{number}</Text>
    </View>
  );
  render() {
    const emptyStayComponent = <Text style={{textAlign: 'center',}}>Empty =(</Text>;
    const noCameraPermissionComponent = <Text style={{textAlign: 'center',}}>No access to camera</Text>;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
        <ImageBrowser
          max={4}
          onChange={this.updateHandler}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
          noCameraPermissionComponent={noCameraPermissionComponent}
        />
      </View>
    );
  }
}
