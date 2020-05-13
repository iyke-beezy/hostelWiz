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
    borderRadius: 40,
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  fbLoginButton: {
    height: 45,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#92A5A3',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: '#fff'
  },
  googleLoginButton: {
    backgroundColor: "#92A5A3",
    height: 45,
    marginBottom: 30,
    borderRadius: 16,
    padding: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
};