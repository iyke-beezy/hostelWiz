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
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
  },
  detailHead: {
    flex: 0.2,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginLeft: screenWidth / 24,
  },
  backAndSave: {
    flex: 1,
    flexDirection: 'row',

  },
  save: {
    margin: 10,
    height: screenHeight / 21,
    width: 4,
    borderRadius: 64,
    backgroundColor: 'grey',
    opacity: 1,
    alignItems: "center",
    flex: 0.6,
  },
  back: {
    margin: 10,
    marginLeft: 1,
    height: screenHeight / 20,
    width: 4,
    borderRadius: 64,
    backgroundColor: 'white',
    opacity: 1,
    alignItems: "center",
    flex: 0.5,
  },
  mainTitle: {
    fontSize: 21,
  },
  subTitle: {
    fontSize: 17,
    color: 'grey'
  },
  detailTitle: {
    flex: 1,
    flexDirection: 'column',
  },
  detailHeader: {
    height: (screenHeight / 2),
    flexDirection: 'row',
    backgroundColor: 'white',

  },
  detailImages: {
    height: (screenHeight / 2) - 10,
    margin: 10,
    borderRadius: 10,
    width: screenWidth / 2
  },
  detailScrollview: {
    flex: 0.5,
    backgroundColor: 'white',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  detailTitleText: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: screenWidth / 17,
    marginRight: screenWidth / 17,
    marginLeft: screenWidth / 4,
    color: 'grey',

  },
  detailText: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: screenWidth / 17,
    marginRight: screenWidth / 17,
    marginLeft: screenWidth / 17,
    color: 'grey',

  },
  spaceBelow: {
    flexDirection: 'column',
    flex: 0.11,


  },
  spaceBelowContent: {
    flexDirection: 'row',
    flex: 0.4,
    margin: 2,
    marginRight: 12,
    marginLeft: 12,

  },
  detailPriceAndRating: {
    fontSize: 15,
    flex: 2,
    marginLeft: 10,
    flexDirection: 'column'

  },
  rateButton: {
    flex: 3,

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
  detailDivider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginBottom: 10,

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
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 10,
    transform: [{ rotate: "-5deg" }],
  },

  imgtop: {
    transform: [{ rotate: "5deg" }],
    width: "105%",
    backgroundColor: "#fff",
    height: 100,
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
};