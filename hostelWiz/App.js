import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import { SplashScreen, Notifications } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoadingScreen from './components/LoadingScreen'
import SignUpScreen from './screens/SignUp';
import ConfirmPassword from './screens/ConfirmPassword';
import DetailsScreen from './screens/DetailsScreen';
import HostingTwo from './screens/HostingTwo';
import HMBottomTabNavigator from './navigation/HMBottomTabNavigation';
import useLinking from './navigation/useLinking';
import EditProfile from './screens/EditProfile';
import Notification from './screens/notification';
import Others from './screens/others';
import Feedback from './screens/feedback';
import Terms from './screens/terms';
import LoginScreen from './screens/Login';
import ImageManagementScreen from './screens/imageManagementScreen';
import checkManager from './screens/checkManager'

import firebase from './screens/firebase';
import ImagePicker from './screens/ImagesPicker/ImagesPicker';
import Hostels from './screens/Hostels';
import Apartments from './screens/Apartments';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [initialRouteName, setinitialRouteName] = React.useState('Login');

  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  async function storeUser(user) {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    let mounted = true;
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        if (mounted) {
          setInitialNavigationState(await getInitialState());

          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              storeUser(user.providerData)
              setinitialRouteName('Root')
            } else {

              setinitialRouteName('Login');
            }
          });
          // Load fonts
          await Font.loadAsync({
            ...Ionicons.font,
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            'Baloo-Paaji': require('./assets/fonts/BalooPaaji2-Regular.ttf'),
            'Baloo-Paaji-Medium': require('./assets/fonts/BalooPaaji2-Medium.ttf')
          });
        }


      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
      return () => mounted = false;
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    const headerLeft =
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          Back
        </Text>
      </TouchableOpacity>;
    const headerRight =
      <TouchableOpacity title={'Done'}>
        <Text>
          Done
        </Text>
      </TouchableOpacity>;
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,

              }}
            />
            <Stack.Screen name="SignUp"
              options={{
                headerShown: false,
              }}
              component={SignUpScreen} />

            <Stack.Screen name="Root"
              options={{
                headerShown: false,

              }}
              component={BottomTabNavigator} />

            <Stack.Screen name="Htwo"
              options={{
                headerShown: false,

              }}
              component={HostingTwo} />

            <Stack.Screen name="Hostels"
              options={{
                headerShown: false,

              }}
              component={Hostels} />

            <Stack.Screen name="Apartments"
              options={{
                headerShown: false,

              }}
              component={Apartments} />

            <Stack.Screen name="Images"
              options={ImagePicker.navigationOptions}
              component={ImagePicker} />

            <Stack.Screen name="details"
              options={{
                headerShown: false,
                title: 'Selected 0 files',
              }}
              component={DetailsScreen} />

            <Stack.Screen name="HMnav"
              options={{ headerShown: false, }}
              component={HMBottomTabNavigator} />

            <Stack.Screen name="edit"
              options={{ headerShown: false, }}
              component={EditProfile} />

            <Stack.Screen name="others"
              options={{ headerShown: false, }}
              component={Others} />

            <Stack.Screen name="feedback"
              options={{ headerShown: false, }}
              component={Feedback} />

            <Stack.Screen name="terms"
              options={{ headerShown: true, title:'Terms and conditions',headerStyle:{
                backgroundColor:'black',
               
              },
            headerTintColor:'white'}}
              component={Terms} />

            <Stack.Screen name="notification"
              options={{ headerShown: false, }}
              component={Notification} />

            <Stack.Screen name="ConfirmPassword"
              options={{ headerShown: false, }}
              component={ConfirmPassword} />

          <Stack.Screen name="ImageManagement"
              options={{ headerShown: false, }}
              component={ImageManagementScreen} />

         <Stack.Screen name="checkManager"
              options={{ headerShown: false, }}
              component={checkManager} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Expo.Constants.statusBarHeight,
  },
});
