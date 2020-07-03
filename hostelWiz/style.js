const React = require("react-native");
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import { Screen } from "react-native-screens";

const { StyleSheet } = React;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default {
  page: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignContent: "center",
    resizeMode: "contain",
    backgroundColor: "#fff",

  },

  containerView: {
    flex: 1,
  },

  /* Details screen styles*/
  saveButton: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 64,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 100,
    alignItems: "center",
    flex: 1,

  },
  backButton: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 64,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 100,
    alignItems: "center",

  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Baloo-Paaji',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingLeft: screenWidth * 0.07,
    paddingTop: Constants.statusBarHeight,
  },
  detailHead: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingRight: screenWidth * 0.05,
    height: screenHeight * 0.20,
    marginBottom: screenHeight * 0.05,
  },
  backAndSave: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  save: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    height: 30,
    width: 30,
    borderRadius: 64,
    backgroundColor: 'rgba(255,255,154,0.5)',
    alignItems: "center",
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 64,
    backgroundColor: 'rgba(255,255,154,0.5)',
    alignItems: "center",
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 16,
    fontFamily: 'Baloo-Paaji-Medium',
  },
  subTitle: {
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Baloo-Paaji-Medium',
  },
  detailTitle: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  detailHeader: {
    //height: (screenHeight / 2),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  detailImages: {
    height: screenHeight * 0.4,
    margin: 10,
    marginLeft: 0,
    borderRadius: 10,
    width: screenWidth * 0.7
  },
  detailScrollview: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -screenHeight * 0.68,
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  detailTitleText: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 15,
    fontFamily: 'Baloo-Paaji'
  },
  detailText: {
    fontSize: 15,
    color: 'grey',
    fontFamily: 'Baloo-Paaji'
  },
  spaceBelow: {
    height: screenHeight * 0.05,
    bottom: 0,
    marginLeft: -screenWidth * 0.03,
    paddingLeft: screenWidth * 0.02
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  rateNow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  spaceBelowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  detailRating: {

  },
  rateButton: {
    height: 30,
    width: 30,
    borderRadius: 64,
    backgroundColor: 'rgba(255,255,154,0.5)',
    alignItems: "center",
    justifyContent: 'center',
    marginRight: screenWidth * 0.05
  },
  callButton: {
    height: 30,
    width: 30,
    borderRadius: 64,
    backgroundColor: 'rgba(255,255,154,0.5)',
    alignItems: "center",
    justifyContent: 'center',
  },
  detailDivider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: screenWidth * 0.05,
    marginLeft: -screenWidth * 0.02
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 100,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 55,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,

  },
  loginFormTextInputArea: {
    height: 90,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 40,
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  acceptButton: {
    backgroundColor: '#3897f1',

    height: 50,
    marginTop: 10,
    marginBottom: 30,

  },
  fbLoginButton: {
    height: 45,

    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#3b5998',
  },
  googleLoginButton: {
    backgroundColor: "#980000",
    height: 45,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {

    flex: 2,
    color: 'blue',

  },
  checkboxSpace: {
    flex: 2,
  },
  label: {
    margin: 8,
  },
  formArea: {
    flexDirection: "column",
    margin: 25,
  },
  formRow: {

  },
  formTitle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,

  },
  label: {
    flex: 2,
    height: 50,
    fontSize: 20,
  },
  formComponent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  select: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    borderRadius: 10,

  },
  textInput: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    borderRadius: 10,
    paddingLeft: 5,
  },
  textDescription: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    height: 150,
    borderRadius: 10,
  },
  secondDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  firstDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 30,
  },
  switchLable: {
    flex: 3,
    height: 60,
    fontSize: 30,
  },
  checkboxLabel: {
    flex: 3,
    height: 60,
    fontSize: 40,
  },
  switch: {
    flex: 2,
    width: 'auto',
    width: 40,
  },
  switchSpace: {
    flex: 2,
  },
  bathRoomTitle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  hosting: {

  },

  Logoimg: {
    resizeMode: "contain",
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 10,
    transform: [{ rotate: "-5deg" }],
  },

  imgtop: {
    transform: [{ rotate: "5deg" }],
    width: "105%",
    backgroundColor: "#fff",
    height: 120,
    position: 'absolute',
    top: 0,
    left: -10,
    marginTop: -Constants.statusBarHeight,
  },
  content: {
    marginTop: 100,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    textAlign: 'center',
    color: "#fff"
  },

  loginFormTextInput: {
    height: 55,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingLeft: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,
    color: "#fff"

  },
  loginFormTextInputArea: {
    height: 90,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,
    color: "#fff"

  },
  loginButton: {
    backgroundColor: '#92A5A3',
    borderRadius: 16,
    height: 45,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
  },
  acceptButton: {
    backgroundColor: '#3897f1',

    height: 50,
    marginTop: 10,
    marginBottom: 30,

  },
  fbLoginButton: {
    borderRadius: 16,
    height: 45,
    marginBottom: 10,
    backgroundColor: '#92A5A3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    alignSelf: 'center',
    padding: 10
  },
  googleLoginButton: {
    height: 45,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: '#92A5A3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    alignSelf: 'center',
    padding: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  checkbox: {

    flex: 2,
    color: 'blue',

  },
  checkboxSpace: {
    flex: 2,
  },
  label: {
    margin: 8,
  },
  formArea: {
    flexDirection: "column",
    margin: 25,
  },
  formRow: {

  },
  formTitle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,

  },
  label: {
    flex: 2,
    height: 50,
    fontSize: 20,
  },
  formComponent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  select: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    borderRadius: 10,

  },
  textInput: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    borderRadius: 10,
    paddingLeft: 5,
  },
  textDescription: {
    flex: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    height: 150,
    borderRadius: 10,
  },
  secondDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  firstDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 30,
  },
  switchLable: {
    flex: 3,
    height: 60,
    fontSize: 30,
  },
  checkboxLabel: {
    flex: 3,
    height: 60,
    fontSize: 40,
  },
  switch: {
    flex: 2,
    width: 'auto',
    width: 40,
  },
  switchSpace: {
    flex: 2,
  },
  bathRoomTitle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  hosting: {

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
};