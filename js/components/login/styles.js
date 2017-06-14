
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop:0,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    margin :10,

  },
  backgroundImage: {
   flex: 1,
   resizeMode: 'cover', // or 'stretch'
 },
 textOne :{
   textAlign :'center'
 },
 btnText :{
   textAlign :'center',
   fontSize :17,
   fontWeight :'bold'
 },
 btnText2 :{
   textAlign :'center',
   fontSize :17,
   fontWeight :'bold',
   color :'white',
  fontStyle :'italic'
 }

};
