import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { AntDesign,Entypo } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import HostingScreen from '../screens/HostingScreen';
import ManagerProfile from '../screens/ManagerProfile';
import ManageProperty from '../screens/ManageProperty';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'ManagerProperty';

export default function HMBottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
     
     
     <BottomTab.Screen
        name="ManagerProperty"
        component={ManageProperty}
        options={{
          title: 'My Properties',
          tabBarIcon: ({ focused }) => <Entypo
          size={30}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} name="home" />,
        }}
      />
     
     
      <BottomTab.Screen
        name="HostingPage"
        component={HostingScreen}
        options={{
       
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,

        }}
      />


    
        <BottomTab.Screen
        name="ManagerProfile"
        component={ManagerProfile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <AntDesign
          size={30}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} name="user" />,
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
