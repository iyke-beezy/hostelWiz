import * as React from 'react';
import {Keyboard, StyleSheet,Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions,ScrollView} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class ExploreScreen extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

    render() {
      const { searchQuery } = this.state;
      return (
        <View style={styles.container}>
        <ScrollView>
        <View style={styles.SearchBar}>
         <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
      </View>
      <View>
      <Text style={{paddingLeft:20,margin: 25,}}>
          Explore Hostel Wiz
      </Text>
      </View>
    
     
      <View style={styles.miniCardComponent}>
        
      <Card containerStyle={styles.miniCard}

  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} 
  >
  <Text style={{textAlign: 'center', marginBottom: 10}}>
   Explore Apartments
  </Text>
</Card>

      <Card containerStyle={styles.miniCard}
 
  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} 
  >
  <Text style={{textAlign: 'center', marginBottom: 10}}>
   Explore Hostels
  </Text>
</Card>

      </View>
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
      <View>
        <Text></Text>
      </View>
      </ScrollView>

        </View>
         
      
      );
    }
  }

  const styles = StyleSheet.create(
    {
      container:{
          backgroundColor:'white',
      },
      SearchBar:{
        flex:1,
        marginTop:40,
        marginLeft:30,
        marginRight:30,
       
      },
      miniCardComponent:{
        flex:8,
        height:'auto',
        flexDirection:'row',
        marginLeft:15,
        marginRight:30,
        
      },
      maxCardComponent:{
        flex:8,
      },
      miniCard:{
       margin:11,
        width:170,
        height:195,
        borderRadius:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10
      },
      rating:{
        flexDirection:"row",
      },
      maxCardText:{
        flexDirection:"row",
      },
      maxCard:{
          marginLeft:25,
          marginRight:22,
          height:245,
          borderRadius:5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,  
          elevation: 10,
      }
    }
  )

  export default ExploreScreen;