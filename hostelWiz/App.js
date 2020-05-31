import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import Login from './screens/Login';
import SignUpScreen from './screens/SignUp';
import HostingOne from './screens/HostingOne';
import DetailsScreen  from './screens/DetailsScreen';
import HostingTwo from './screens/HostingTwo';
import HostingThree from './screens/HostingThree';
import HMBottomTabNavigator from './navigation/HMBottomTabNavigation';
import useLinking from './navigation/useLinking';
import EditProfile from './screens/EditProfile';

import * as SecureStore from 'expo-secure-store';
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [initialRouteName, setinitialRouteName] = React.useState('Login');
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        if(SecureStore.getItemAsync('token')){
          setinitialRouteName('Root')
        }
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'Baloo-Paaji': require('./assets/fonts/BalooPaaji2-Regular.ttf'),
          'Baloo-Paaji-Medium': require('./assets/fonts/BalooPaaji2-Medium.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
          <Stack.Screen
           name="Login"
            component={Login}
            options={{
              headerShown: false,
            
            }}
            />
            <Stack.Screen name="Root" 
               options={{
                headerShown: false,
              
              }}
            component={BottomTabNavigator} />
              <Stack.Screen name="SignUp" 
               options={{
                headerShown: false,
              
              }}
            component={SignUpScreen} />

              <Stack.Screen name="Hone" 
               options={{
                headerShown: false,
              
              }}
            component={HostingOne} />
            
             <Stack.Screen name="Htwo" 
               options={{
                headerShown: false,
              
              }}
            component={HostingTwo} />
            
             <Stack.Screen name="details" 
               options={{
                headerShown: false,
              
              }}
            component={DetailsScreen} />

              <Stack.Screen name="HMnav" 
               options={{ headerShown: false, }}
            component={HMBottomTabNavigator} />

              <Stack.Screen name="edit" 
               options={{ headerShown: false, }}
            component={EditProfile} />

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
