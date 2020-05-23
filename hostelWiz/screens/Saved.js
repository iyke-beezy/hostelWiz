import * as React from 'react';
import {Keyboard,StyleSheet,TouchableHighlight, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Card,Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class SavedScreen extends React.Component {


  state = {
    searchQuery: '',
    rating:2,
    save:false,
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
     // require('./assets/images/hostel.jpg'),          // Local image
    ]
  };

  save = () => {
    
      this.setState({save:!this.state.save}) 
  }


  _onChangeSearch = query => this.setState({ searchQuery: query });


    render() {
      return (
          <ScrollView style={styles.container}>
        <View style={styles.cardContainer} >
       
        
      
        <TouchableHighlight  onPress={() => this.props.navigation.navigate('details')} >
        <View style={styles.maxCard}
     
   
    
    >  
    
  
    <SliderBox dotColor={'orange'} onCurrentImagePressed={() => this.props.navigation.navigate('details')} sliderBoxHeight={screenHeight/4 -5} images={this.state.images} >
  
    </SliderBox>
    <TouchableOpacity
          onPress = {() => this.save()}
          style={styles.saveButton}
        ><View  >
          {
            this.state.save ?  <AntDesign color='red' style={{marginTop:7}} size={25} name="heart" />
             :
             <AntDesign color='white' style={{marginTop:7}} size={25} name="heart" />
          }
         
      
        </View>
          
        </TouchableOpacity>
    
       
   
   

        
  
  
  <View style={styles.maxCardTextArea}>
          <View>
    <View style={{flexDirection:'row'}}>
  
  <Text style={styles.title} >
     Grand Royal Hostels
    </Text>
  <Text style={{flex:3}}></Text>
  
  <Text style={styles.price}>
      Ghc 120.00
    </Text>
  
    
   
    </View>
    </View>
    <View style={styles.description}>
      <Text style={{color:'grey',flex:8}} >Second otwe street , 0.2 km from your location</Text>
      <Text style={{color:'grey',flex:0.2}} ></Text>
      <Text style={{color:'grey',flex:2}} >/per day</Text>
    </View>
    
   <View style={styles.rating}>
   <AntDesign size={20} style={{ marginBottom: -3 }}   color={this.state.rating > 0 ? 'orange': Colors.tabIconDefault} name="star" />
   <AntDesign size={20}  style={{ marginBottom: -3 }}   color={this.state.rating > 1 ? 'orange': Colors.tabIconDefault} name="star" />
   <AntDesign size={20}  style={{ marginBottom: -3 }}   color={this.state.rating > 2 ? 'orange': Colors.tabIconDefault} name="star" />
   <AntDesign size={20}  style={{ marginBottom: -3 }}   color={this.state.rating > 3 ? 'orange': Colors.tabIconDefault} name="star" />
   <AntDesign size={20}  style={{ marginBottom: -3 }}   color={this.state.rating > 4 ? 'orange': Colors.tabIconDefault} name="star" />
   </View>
   
   </View>
  </View>

       

        </TouchableHighlight>
        </View>
        </ScrollView>
      
      );
    }
  }

  const styles = StyleSheet.create(
    {

      container:{
        backgroundColor:'white',
        flex:1,
    },
    SearchBar:{
      flex:1,
      marginTop:30,
      marginLeft:30,
      marginRight:30,
     
     
    },
    belowSearchBar:{
      flex : 1,
      flexDirection:'column',
    },
    miniCardComponent:{
      flex:12,
      height:'auto',
      flexDirection:'row',
     marginLeft:12,
      marginRight:12,
      
      
    },
    maxCardComponent:{
      flex:12,
      
    },
    miniCard:{
      overflow:'hidden',
      flex:6,
     margin:5,
      width:180,
      height:185,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 10
    },
    rating:{
      flexDirection:"row",
      marginTop:10,
      
    },
    maxCardTextArea:{
      
      flexDirection:"column",
      backgroundColor:"white",
      flex:4,
     padding:10,
    
    },
    saveButton:{
      margin: 10,position: 'absolute', top: 8, right: 10,
      height:40,
      width: 40,
      borderRadius: 64,
      backgroundColor:'rgba(0,0,0,0.5)',
      opacity:100,
      alignItems: "center",

    },
    title:{
      //margin:0,
     fontSize:16,
      flex:4,

      fontWeight:'bold',
      
      
    },
    description:{
     marginTop:5,
     flexDirection:'row',
    },
    price:{
      flex:2,
     fontSize:16,
     fontWeight:'bold',
    },
    maxCard:{
      overflow:'hidden',
      flex:12,
      flexDirection:'column',
      marginTop:screenHeight/30,
      marginLeft:screenHeight/35,
      marginRight:screenHeight/35,
      marginBottom:screenHeight/35,
        height:screenHeight/3 + 30,
        borderRadius:14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10,
    }
    }
  )

  export default SavedScreen;