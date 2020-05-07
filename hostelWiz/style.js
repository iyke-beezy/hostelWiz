const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
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
  marginBottom:30,
  marginLeft: 20,
  marginRight: 20,
},
fbLoginButton: {
  height: 45,
  
  marginBottom:30,
  marginLeft: 30,
  marginRight: 30,
  backgroundColor: '#3b5998',
},
googleLoginButton: {
  backgroundColor: "#980000",
   height:45,
   marginTop: 20,
   marginBottom:30,
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