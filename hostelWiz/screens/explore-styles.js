const React = require("react-native");
import Constants from 'expo-constants';
const { StyleSheet } = React;
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default {
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
        fontFamily: 'Baloo-Paaji',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingLeft: screenWidth * 0.05,
        paddingRight: screenWidth * 0.05,
        height: screenHeight
    },
    SearchBar: {
        flex: 1,
    },
    belowSearchBar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    miniCardComponent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: screenHeight * 0.03,

    },
    miniCard: {
        width: screenWidth * 0.4,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        margin: 10,
        padding: 0,
    },
    saveButton: {
        margin: 10,
        position: 'absolute',
        top: 8,
        right: 0,
        height: 40,
        width: 40,
        borderRadius: 64,
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 100,
        alignItems: "center",
    },

    maxCardComponent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: screenHeight * 0.03,
        marginRight: screenWidth * 0.05,

    },
    maxCard: {
        height: screenHeight * 0.4,
        borderRadius: 14,
        marginRight: screenWidth * 0.1,
        elevation: 1,
        width: screenWidth * 0.9
    },
    maxCardTextArea: {
        backgroundColor: "white",
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "column",
        padding: 10,
        paddingTop: 0,
        justifyContent: 'center',
        width: 'auto',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Baloo-Paaji-Medium',
    },
    price: {
        fontSize: 16,
        fontFamily: 'Baloo-Paaji',
    },
    description: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start'
    },
    rating: {
        flex: 1,
        flexDirection: 'row',
    }
}