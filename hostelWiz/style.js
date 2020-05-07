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
    justifyContent: "center",
  },

  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    textAlign: 'center',
  },

  loginFormTextInput: {
    height: 55,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent',
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
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
};