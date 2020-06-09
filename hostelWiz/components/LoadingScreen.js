import React from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import firebase from 'firebase';


class LoadingScreen extends React.Component {

    async storeUser(user) {
        try {
            await AsyncStorage.setItem("userData", JSON.stringify(user));
            this.setState({ loading: false })
            this.props.navigation.navigate("Root", {
                screen: 'Explore',
            }
            )
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.storeUser(user.providerData)
            } else {
                this.props.navigation.navigate('Login');
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default LoadingScreen;