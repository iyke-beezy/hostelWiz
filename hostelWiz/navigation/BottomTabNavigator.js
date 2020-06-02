import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import * as React from 'react';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/Explore';
import SavedScreen from '../screens/Saved';
import ProfileScreen from '../screens/Profile';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  const { t } = route.params;

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon size={25} focused={focused} name="md-search"  />,

        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Saved',
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
        
          color={focused ? 'gold' : 'black'} 
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
