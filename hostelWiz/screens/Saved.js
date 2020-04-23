import * as React from 'react';
import {Keyboard,StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';

import { Card,Button, Icon } from 'react-native-elements';


class SavedScreen extends React.Component {


 

    render() {
      return (
          <ScrollView>
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
      }
    }
  )

  export default SavedScreen;