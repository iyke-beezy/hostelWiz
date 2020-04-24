import * as React from 'react';
import {Keyboard,StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Card,Button, Icon } from 'react-native-elements';


class SavedScreen extends React.Component {


 

    render() {
      return (
          <ScrollView>
        <View>
        <Card
 containerStyle={styles.maxCard}
  image={require('../assets/images/hostel.jpg')}
  >
<View style={styles.maxCardText}>
  <Text style={{margin: 10}}>
   Grand Royal Hostels
  </Text>
  <Text style={{paddingLeft:130, margin: 10}}>
    Ghc 120.00
  </Text>
  </View>
 <View style={styles.rating}>
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={Colors.tabIconDefault} name="star" />
 <AntDesign size={30} style={{ marginBottom: -3 }} color={ Colors.tabIconDefault} name="star" />
 </View>
</Card>
 
        </View>
        </ScrollView>
      
      );
    }
  }

  const styles = StyleSheet.create(
    {
    
      maxCard:{
          marginLeft:25,
          marginRight:22,
          marginTop:40,
          height:250,
          borderRadius:5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,  
          elevation: 10,
      },
      rating:{
        flexDirection:"row",
      },
      maxCardText:{
        flexDirection:"row",
      },
    }
  )

  export default SavedScreen;