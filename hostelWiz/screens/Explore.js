import * as React from 'react';
import {Keyboard, StyleSheet,Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions,ScrollView} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

class ExploreScreen extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

    render() {
      const { searchQuery } = this.state;
      return (
        <View>
        <ScrollView>
        <View style={styles.SearchBar}>
         <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
      </View>
    
     
      <View style={styles.miniCardComponent}>
        
      <Card containerStyle={styles.miniCard}

  //image={require('')} 
  >
  <Text style={{marginBottom: 10}}>
   Explore Apartments
  </Text>
</Card>

      <Card containerStyle={styles.miniCard}
 
  //image={require('')} 
  >
  <Text style={{marginBottom: 10}}>
   Explore Hostels
  </Text>
</Card>

      </View>
      <View>
      <Card
 containerStyle={styles.maxCard}
 // image={require('')}
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
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
        height:150,
        borderRadius:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10
      },
      maxCard:{
          marginLeft:25,
          marginRight:22,
          height:250,
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