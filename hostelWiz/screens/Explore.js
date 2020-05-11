import * as React from 'react';
import {Keyboard, StyleSheet,Text, View, TouchableOpacity,Dimensions,ScrollView} from 'react-native';
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
        <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.SearchBar}>
         <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
    
      </View>
      <ScrollView style={styles.belowSearchBar}>
      <View>
      <Text style={{paddingLeft:20,margin: 25,}}>
          Explore Hostel Wiz
      </Text>
      </View>
    
     
      <View style={styles.miniCardComponent}>
        
      <Card containerStyle={styles.miniCard}
 
  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} 
  imageStyle={{borderRadius:10}}
  >
  
  <Text style={{textAlign: 'center', marginBottom: 10}}>
   Explore Apartments
  </Text>
</Card>

      <Card containerStyle={styles.miniCard}
 
  image={require('../assets/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}
  imageStyle={{borderRadius:10}} 
  >
  <Text style={{textAlign: 'center', marginBottom: 10}}>
   Explore Hostels
  </Text>
</Card>

      </View>
      <View >
      <Card containerStyle={styles.maxCard}

  image={require('../assets/images/hostel.jpg')}
  imageStyle={{borderRadius:10}}
  >

<TouchableOpacity
        style={styles.saveButton}
      ><View  >
        <AntDesign color="red" style={{marginTop:7}} size={25} name="heart" />
    
      </View>
        
      </TouchableOpacity>


<View style={styles.maxCardTextArea}>
        <View>
  <View style={{flexDirection:'row'}}>

<Text styles={styles.title} >
   Grand Royal Hostels
  </Text>
<Text style={{flex:3}}></Text>

<Text styles={styles.price}>
    Ghc 120.00
  </Text>

  
 
  </View>
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



    
  
 
      <View>
        <Text></Text>
      </View>
      </ScrollView>
      </ScrollView>

        </View>
         
      
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
      
      },
      saveButton:{
        margin: 10,position: 'absolute', top: -150, right: 10,
        height:40,
        width: 40,
        borderRadius: 64,
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:100,
        alignItems: "center",

      },
      title:{
        margin:10,
        flex:4,
        
      },
      description:{
       marginTop:5
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
        marginBottom:5,
          height:245,
          borderRadius:14,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,  
          elevation: 10,
      }
    }
  )

  export default ExploreScreen;