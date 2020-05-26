import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login'
import BottomTabNavigator from './BottomTabNavigator'
import * as SecureStore from 'expo-secure-store'

import SignUpScreen from './screens/SignUp';
import HostingOne from '../screens/HostingOne';
import HostingThree from '../screens/HostingThree';
import HostingTwo from '../screens/HostingTwo';
import DetailsScreen from '../screens/DetailsScreen';
import HMBottomTabNavigator from './HMBottomTabNavigation';
import EditProfile from '../screens/EditProfile';

const AuthStack = createStackNavigator({Login: LoginScreen, SignUp: SignUpScreen}, {initialRouteName: 'Login'}, {headerMode: 'none'})
const AppStack = createStackNavigator({Home: BottomTabNavigator},{headerMode: 'none'})
const MiscStack = createStackNavigator({Hone: HostingOne, Htwo: HostingTwo, details: DetailsScreen, HMnav: HMBottomTabNavigator, edit: EditProfile})

var initialRouteName = 'Auth'
if(SecureStore.getItemAsync('token')){
    initialRouteName = 'Root'
}
export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        Root: AppStack,
        Misc: MiscStack
    }, {
        initialRouteName
    })
)