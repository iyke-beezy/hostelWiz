import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, AsyncStorage,Dimensions } from 'react-native'
import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/Explore';
import SavedScreen from '../screens/Saved';
import ProfileScreen from '../screens/Profile';
import Colors from '../constants/Colors';
import firebase from 'firebase'
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  async function storeUser(user) {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        storeUser(user.providerData)
      }
    })
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{style:{height:screenHeight*0.07,paddingTop:screenHeight*0.015}}}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon size={25} focused={focused} name="md-search" />,

        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <Image
            source={focused ? require('../assets/images/active.png') : require('../assets/images/inactive.png')}
            style={{ marginBottom: -3 }}
          />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}

        options={{
          title: '',
          tabBarIcon: ({ focused }) => <FontAwesome
            size={25}

            color={focused ? '#E7C654' : '#92A5A3'}
            name={focused ? 'user-circle' : 'user-circle-o'} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Saved':
      return 'Links to learn more';
    case 'Profile':
      return 'Links to learn more';
  }
}

function getHeader(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Explore':
      return 'none';
    case 'Profile':
      return 'Links to learn more';
  }
}
