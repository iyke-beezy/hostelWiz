import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import Login from './screens/Login';
// import SignUpScreen from './screens/SignUp';
// import HostingOne from './screens/HostingOne';
// import DetailsScreen from './screens/DetailsScreen';
// import HostingTwo from './screens/HostingTwo';
// import HostingThree from './screens/HostingThree';
// import HMBottomTabNavigator from './navigation/HMBottomTabNavigation';
// import useLinking from './navigation/useLinking';
// import EditProfile from './screens/EditProfile';

// import * as SecureStore from 'expo-secure-store';
import AppNavigator from './navigation/AppNavigator';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state

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
        <AppNavigator />
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
