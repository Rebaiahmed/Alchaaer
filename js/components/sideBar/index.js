
import React, { Component } from 'react';
import { Content, Text, ListItem,Card, CardItem , Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image,WebView, Linking,Modal,  AsyncStorage } from 'react-native';
import { connect} from 'react-redux';
import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import * as Progress from 'react-native-progress';
import {
  processColor, // make sure to add processColor to your imports if you want to use hex colors as shown below
} from 'react-native';
var Browser = require('react-native-browser');
import * as Animatable from 'react-native-animatable';

var Dimensions = require('Dimensions');
import styles from './style';










class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }



  constructor(props) {
    super(props);
    this.state ={
      authUser : false,
      myCondition :false };

 console.log("state"+ JSON.stringify(this.state));
  }

  //*********************//



  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }







//******************************************//
componentDidMount() {
console.log("hello !"+ this.state.authUser);

  Linking.getInitialURL().then((url) => {
    if (url) {
      console.log('Initial url is: ' + url);
    }
  }).catch(err => console.error('An error occurred', err));

//****
 this._loadInitialState().done();
}








 _loadInitialState = async () => {
    try { var value = await AsyncStorage.getItem("userId");
    console.log("value sidebar"+ value);
       if (value !== null){
         this.setState({authUser :true});
         this.determineUser(value);
         } else {
          console.log("no value sidebar authUser")
          }
         } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
   }
 };



//**********************************//
determineUser(id :string)
{

if(id)
{


  fetch('http://192.168.1.5:4040/api/users/'+ id + '', {
     method: 'GET',
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

   })
   .then((response) => response.json())
   .then((responseData) => {
  //console.log("responseData" + JSON.stringify(responseData));
  this.setState({User : responseData});


   }).catch((error) =>
       {
             /*this.setState({
               loading: false,
               myCondition : false
             });*/

             console.log("error" + JSON.stringify(error));

   });

}






}




//***************external links*******************//

openFacebook()
{
  Linking.canOpenURL('https://www.facebook.com/').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://www.facebook.com/'); } }).catch(err => console.error('An error occurred', err));
}



openTwitter()
{
  Linking.canOpenURL('https://twitter.com/AhmedRebaijs').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://twitter.com/AhmedRebaijs'); } }).catch(err => console.error('An error occurred', err));
}


openIntsagram()
{
  Linking.canOpenURL('https://www.instagram.com/?hl=fr').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://www.instagram.com/?hl=fr'); } }).catch(err => console.error('An error occurred', err));
}



openAppStore()
{
  Alert.alert(
              'نعتذر',
              '"التنزيل معلق"',
            )
}



 _removeStorage = async () => {
   try {
      await AsyncStorage.removeItem("userId");
      //this._appendMessage('Selection removed from disk.');
    this.setState({authUser:false});
     } catch (error)
      {
    console.log('AsyncStorage error: ' + error.message);
  }
 };




logout()
{
  this.setState({myCondition : true});
   console.log("state"+ JSON.stringify(this.state.myCondition));

;
  console.log("logout function" + this.state.myCondition);
setTimeout( () => {

      this.setState({
        myCondition: true
      })
   },1000);


console.log("myConditon will be "+JSON.stringify(this.state.myCondition));
this._removeStorage();
this.props.closeDrawer();
Actions.login();


//myCondition
}



  render() {

const {width, heigth} = Dimensions.get('window');

  const { state : { authUser}} = this ;
console.log("authUser" + authUser);
    return (
      <Content style={styles.sidebar} >






     <ListItem  >
     <Image
  source={require('../../../images/logo.png')}
  fadeDuration={0}
  style={{width: 40, height: 40}}
 />
   <Animatable.Text animation="zoomInUp">
       <Text>ملتقى الشعراء العرب </Text>
       </Animatable.Text>
     </ListItem>


       <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer(); }} >
       <Image
     source={require('../../../images/home.png')}
     fadeDuration={0}
     style={{width: 20, height: 20}}
     />
     <Animatable.Text animation="zoomInUp">
         <Text>الرئيسية </Text>
     </Animatable.Text>
       </ListItem>
       <ListItem button onPress={() => { Actions.Poetes(); this.props.closeDrawer(); }} >
       <Image
     source={require('../../../images/arabman.png')}
     fadeDuration={0}
     style={{width: 20, height: 20}}
     />
     <Animatable.Text animation="zoomInUp">
         <Text>أهم شعراء العرب </Text>
           </Animatable.Text>
       </ListItem>

 <ListItem button onPress={() => { Actions.Poemes(); this.props.closeDrawer(); }} >
 <Image
source={require('../../../images/blog.png')}
fadeDuration={0}
style={{width: 20, height: 20}}
/>
 <Animatable.Text animation="zoomInUp">
         <Text>الشعر العربي </Text>
         <Text> { authUser} </Text>

   </Animatable.Text>
       </ListItem>



       <ListItem itemDivider>

        </ListItem>


{authUser !=false &&
     <ListItem button onPress={() => { Actions.Create(); this.props.closeDrawer(); }} >
     <Image
   source={require('../../../images/pen.png')}
   fadeDuration={0}
   style={{width: 20, height: 20}}
   />
     <Animatable.Text animation="zoomInUp">
     <Text> أنشر شعرك </Text>

       </Animatable.Text>
   </ListItem>

}

{this.state.authUser
   && <ListItem button onPress={() => { Actions.Profile(); this.props.closeDrawer(); }} >
   <Image
   source={require('../../../images/man.png')}
   fadeDuration={0}
   style={{width: 20, height: 20}}
   />
   <Animatable.Text animation="zoomInUp">
   <Text>ملفي</Text>
     </Animatable.Text>
   </ListItem>
}


 {!this.state.authUser  && <ListItem button onPress={() => { Actions.login(); this.props.closeDrawer(); }} >
 <Image
source={require('../../../images/arab.png')}
fadeDuration={0}
style={{width: 20, height: 20}}
/>
<Animatable.Text animation="zoomInUp">
 <Text>تسجيل دخول</Text>
   </Animatable.Text>
</ListItem>
}

{this.state.authUser &&
<ListItem button onPress={() => { Actions.FavorisPage(); this.props.closeDrawer(); }} >
<Image
source={require('../../../images/star.png')}
fadeDuration={0}
style={{width: 20, height: 20}}
/>
<Animatable.Text animation="zoomInUp">
<Text> ألمفضلة </Text>
   </Animatable.Text>
</ListItem>

}

<ListItem itemDivider>

 </ListItem>


       <ListItem button onPress={this.openFacebook.bind(this)} >
          <Image
       source={require('../../../images/facebook.png')}
       fadeDuration={0}
       style={{width: 20, height: 20}}
     />
     <Animatable.Text animation="zoomInUp">
         <Text> Facebook</Text>
       </Animatable.Text>
       </ListItem>

       <ListItem button onPress={this.openFacebook.bind(this)} >
       <Image
    source={require('../../../images/Instagram.png')}
    fadeDuration={0}
    style={{width: 20, height: 20}}
  />
    <Animatable.Text animation="zoomInUp">
         <Text> Instagram</Text>
           </Animatable.Text>
       </ListItem>

       <ListItem button onPress={this.openFacebook.bind(this)} >
       <Image
    source={require('../../../images/twitter.png')}
    fadeDuration={0}
    style={{width: 20, height: 20}}
  />
  <Animatable.Text animation="zoomInUp">
         <Text> Twitter</Text>
             </Animatable.Text>
       </ListItem>



       <ListItem itemDivider>

        </ListItem>

       <ListItem button onPress={this.openFacebook.bind(this)} >
       <Image
    source={require('../../../images/playstore.png')}
    fadeDuration={0}
    style={{width: 20, height: 20}}
  />
     <Animatable.Text animation="zoomInUp" onPress={this.openAppStore.bind(this)} >
         <Text> شارك التطبيق </Text>
         </Animatable.Text>
       </ListItem>

         <ListItem button onPress={() => { Actions.Contact(); this.props.closeDrawer(); }} >
         <Image
      source={require('../../../images/letter.png')}
      fadeDuration={0}
      style={{width: 20, height: 20}}
    />
      <Animatable.Text animation="zoomInUp">
         <Text> تواصل معنا</Text>
           </Animatable.Text>

       </ListItem>

{this.state.authUser &&
       <ListItem button onPress={() => { this.logout(); }} >
       <Image
    source={require('../../../images/logout.png')}
    fadeDuration={0}
    style={{width: 20, height: 20}}
  />
    <Animatable.Text animation="zoomInUp">
       <Text>تسجيل خروج</Text>
         </Animatable.Text>

     </ListItem>
}

 </Content>


    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}
SideBar= Animatable.createAnimatableComponent(SideBar);
export default connect(null, bindAction)(SideBar);
