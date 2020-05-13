const React = require("react-native");
import Constants from 'expo-constants';

const { StyleSheet } = React;


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
  detailContainer: {
    flex: 1,
    backgroundColor:'white',
    flexDirection:'column'
  },
  header:{
    //height: 182,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#03A9F4',
  overflow: 'hidden',
  },
  bar: {
   
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop:200,
  
    
  },
  detailContent:{
  flex:4,
  borderRadius:20,
  backgroundColor:'white',
  position: 'relative',
  bottom:20,
  paddinBottom:10,
  height:'auto',
  
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