


import React, { Component } from 'react';
import { TouchableOpacity,Image,ListView ,Animated,TouchableHighlight,
  AsyncStorage,View } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content,  Card, CardItem, Thumbnail, Text, Button, Left, Body,Right
,Tab, Tabs, List, ListItem,Footer, FooterTab,H3 , Toast} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


//import * as firebase from 'firebase';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/MaterialIcons';

//µ************Import our Data******************//
var Dimensions = require('Dimensions');
const logo = require('../../../images/arab.png');
var REQUEST_URL = 'http://192.168.1.6:3000/poemes.json';
//var Firebase = require('firebase');

//***************************//

import ActionButton from 'react-native-action-button';
var _ = require('lodash');

import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';
import Share, {ShareSheet} from 'react-native-share';
class Item  extends Component {



  constructor(props) {
     super(props);


          this.state = {
           visible: false,
           authUser : false,
           user : null,
             myCondition : true,
             isOpen: false,
isDisabled: true,
open: false,
iconColor :'#e8eaf6',
idUser : ''
         };



     }


//this.poemesRef = ref.child('poemes');
//console.log("poemes are"+ this.poemesRef);
   }


  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

//****************************//


//
//************************//

onCancel() {
  console.log("CANCEL")
  this.setState({visible:false});
}
onOpen() {
  console.log("OPEN")
  this.setState({visible:true});
}



//*************get teh currentUser***************//

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
    this.setState({user:responseData});

   }).catch((error) =>
       {
             /*this.setState({
               loading: false,
               myCondition : false
             });*/

             console.error("error" + JSON.stringify(error));

   });

}



}


//*********************************/
//*********************************//


//****************************//

//***************************//
componentDidMount() {

 this._loadInitialState().done();

//*************************//
}



_loadInitialState = async () => {

   try { var value = await AsyncStorage.getItem("userId");
   console.log("value home"+ value);
      if (value !== null){
        this.setState({idUser : value})
          this.determineUser(value);
        } else {
         console.log("no value sidebar authUser")
         }
        } catch (error) {
   console.log('AsyncStorage error: ' + error.message);
  }
};





//************************************//

componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    /*AsyncStorage.getItem('userData').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      console.log('user data'+ userData);
      /*this.setState({
        user: userData,
        loading: false
      });*/
    //});

}



//***********check liked or not
//***********
checkLike(item, idUser)
{



//console.log("poemes" + poemes);
console.log("item is" + JSON.stringify(item.likedBy)) ;

var result = _.some(item.likedBy, function (topic) {
  console.log("topic is" + JSON.stringify(topic));
  return topic._id === idUser;
});

console.log("result is" + result);

return result ;
}



AddLike(Item)
{


console.log("poeme id" + JSON.stringify(Item));
//let user = this.determineUser();
this.setState({iconColor :'#e91e63'})

//*********update the Item*************//



            this.setState({myCondition : true})
         const user= this.state.user ;
         console.log("id user" + this.state.user._id )
          fetch('http://192.168.1.5:4040/api/publications/likes', {
               method: 'POST',
               headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
               body: JSON.stringify({
                userId : user._id,
                 postId: Item._id,
               })
             })
             .then((response) => response.json())
             .then((responseData) => {

               //save token**************/
               //this.saveItem('id_token', responseData.id_token),
               console.log("rowID", responseData);
      /* var newArray = this.state.db.slice();
       newArray[rowID] = {
           key: newArray[rowID].key,
           details: newArray[rowID].details,
           isCollapsed: newArray[rowID].isCollapsed == false ? true : false,
       };
       this.setState({
           dataSource: this.state.dataSource.cloneWithRows(newArray),
           db: newArray,
       }*/
              Toast.show({
                             text: 'تم إضافة الإعجاب ',
                             position: 'bottom',
                             buttonText: 'أغلق'
                           })

             }).catch((error) =>
                 {
                       this.setState({
                         loading: false,
                         myCondition : false
                       });

                    console.log("errro" +error);

             });



}

//**************comment Publication

commentPub(pub)
{
console.log("pub" + JSON.stringify(pub));
///go to comment page
Actions.comments({'pubId':pub._id});
}




  //****************************//

share(pub)
{


this.setState({visible:true});
let shareOptions = {
    title: "React Native",
    message: "Hola mundo",
    url: "http://facebook.github.io/react-native/",
    subject: "Share Link" //  for email
  };
console.log("pub pub pub"+ JSON.stringify(pub));

}


//*****************render loading View*****************//
//*****************




//*****************render List of publications******************//
//*****************
//*****************
render()
{

    const { props: { name, index, list } } = this;

  const idUser = this.state.idUser ;
   const { props : { item}} = this ;
  //console.log("poemes are"+ poemes._dataBlob.s1);
  const {width, heigth} = Dimensions.get('window');



      return (






                                   <Card >
                                         <CardItem>
                                             <Left>
                                                 <Thumbnail source={logo} />
                                                 <Body>

                                                     <Text style={{fontWeight :'bold',
                                                   color  :'#3F51B5'} }> { item.Title} </Text>
                                                     <Text style={{fontWeight :'bold',
                                                   color  :'#2196f3'}}>
                                                   {item.username}

                                                   </Text>
                                                 </Body>
                                             </Left>
                                           </CardItem>

                                           <CardItem content>
                                              <Text>
                                         { item.Content}
                                              </Text>


                                           </CardItem>


  { item.ImageUrl !="" && (
    <CardItem cardBody>

           <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
           <Text>  {item.ImageUrl } </Text>
           </CardItem>

  )}




                                           <CardItem>


                                           <Grid>


      <Col>


                    <Button transparent iconLeft onPress={ () => this.AddLike(item)
                     }>


{this.checkLike(item,idUser) ? <Icon style={{fontSize: 25, textAlign: 'right',
color :'#2196f3' }} name='favorite' /> : <Icon style={{fontSize: 25, textAlign: 'right',
color :this.state.iconColor }} name='favorite-border' />  }







                          </Button>



           </Col>



      <Col>


      <Button transparent iconLeft onPress={ () => this.commentPub(item)}>
                <Icon style={{fontSize: 25, textAlign: 'right' }} name='comment' />

            </Button>

      </Col>






        <Col>


  <Button transparent iconLeft onPress={() => this.setState({open: true})}>
            <Icon style={{fontSize: 25, textAlign: 'right' }} name='share' />

        </Button>


        </Col>



  </Grid>







                                         </CardItem>
                                    </Card>





                       <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
                              <Button iconSrc={{ uri: TWITTER_ICON }}
                                      onPress={()=>{
                                   console.log("twitter")
                                }}>
                                <Text>Twitter</Text>
                                </Button>
                              <Button iconSrc={{ uri: FACEBOOK_ICON }}
                                      onPress={()=>{
                                     console.log("facebook")
                                }}><Text>Facebook </Text>
                                </Button>





                            </ShareSheet>











      );
}










}



//state.user.name
/*const mapStateToProps = state => ({
  name: '',
  list: '',
});*/




import * as Animatable from 'react-native-animatable';
Item  = Animatable.createAnimatableComponent(Item);



export default Item ;
