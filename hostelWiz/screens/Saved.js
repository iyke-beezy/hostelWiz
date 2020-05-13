import * as React from 'react';
import {Keyboard,StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Card,Button, Icon } from 'react-native-elements';


class SavedScreen extends React.Component {


 

    render() {
      return (
          <ScrollView style={styles.container}>
        <View style={styles.cardContainer} >
        <Card
 containerStyle={styles.maxCard}
  image={require('../assets/images/hostel.jpg')}
  >




<View style={styles.maxCardTextArea}>
        
  <View style={{flexDirection:'row'}}>

<Text styles={styles.title} >
   Grand Royal Hostels
  </Text>
<Text style={{flex:3}}></Text>

<Text styles={styles.price}>
    Ghc 120.00  
  </Text>
  

  
 
  </View>
  
  <View style={styles.description}>
    <Text >description</Text>

    
  </View>
  
 <View style={styles.rating}>
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 </View>
 
 </View>
</Card>
 
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
    
    rating:{
      flexDirection:"row",
      marginTop:10,
    },
    maxCardTextArea:{
      
      flexDirection:"column",
    
    },
    saveButton:{
      margin: 10,
      height:35,
      width: 35,
      borderRadius: 64,
      backgroundColor:'white',
      opacity:100,
      alignItems: "center",

    },
    title:{
      margin:10,
      flex:4,
      
    },
    description:{
     marginTop:5,flexDirection:'row'
    },
    price:{
      flex:2,
     fontSize:10,
    },
    maxCard:{
      overflow:'hidden',
      flex:12,
      marginLeft:15,
      marginRight:15,
      marginBottom:10,
        height:245,
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10,
    }
    }
  )

  export default SavedScreen;