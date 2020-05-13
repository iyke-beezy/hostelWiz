const React = require("react-native");

const { StyleSheet } = React;


export default {



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
acceptButton: {
  backgroundColor: '#3897f1',

  height: 50,
  marginTop: 10,
  marginBottom:30,
  
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
  
  flex:2,
  color:'blue',
 
},
checkboxSpace:{
  flex:2,
},
label: {
  margin: 8,
},
formArea:{
flexDirection:"column",
margin:25,
},
formRow:{

},
formTitle:{
margin:10,
textAlign:'center',
fontSize:25,

},
label:{
flex:2,
height:50,
fontSize:20,
},
formComponent:{
flexDirection:'row',
marginTop:30,
},
select:{
  flex:5,
  borderWidth:1,
  borderStyle:'solid',
  borderColor:'black',
  width:'auto', 
  borderRadius:10,
  
},
textInput:{
  flex:5,
  borderWidth:1,
  borderStyle:'solid',
  borderColor:'black',
  width:'auto', 
  borderRadius:10,
  paddingLeft:5,
},
textDescription:{
  flex:5,
  borderWidth:1,
  borderStyle:'solid',
  borderColor:'black',
  width:'auto', 
  height:150,
  borderRadius:10,
},
secondDivider:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginTop:30,
},
firstDivider:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginBottom:10,
  marginTop:30,
},
switchLable:{
  flex:3,
  height:60,
  fontSize:30,
},
checkboxLabel:{
  flex:3,
  height:60,
  fontSize:40,
},
switch:{
  flex:2,
  width:'auto', 
  width:40,
},
switchSpace:{
flex:2,
},
bathRoomTitle:{
  margin:10,
textAlign:'center',
fontSize:25,
},
hosting:{
  
}
};