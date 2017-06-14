
import React, { Component } from 'react';
import { Image,AsyncStorage,Easing,Animated,TouchableHighlight,
  TouchableWithoutFeedback,NetInfo,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, View, Text,
Form, Item, Input,Label,Toast,H3,Header, Left, Body,Right,Title,ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setUser } from '../../actions/user';
import styles from './styles';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
const FBSDK = require('react-native-fbsdk');
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const {
  LoginManager,
  AccessToken,
  GraphRequest,
    GraphRequestManager,
} = FBSDK;

validator = require("email-validator");


 FBSDKCore = require('react-native-fbsdkcore');
 var {
  FBSDKAccessToken,

} = FBSDKCore;






class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }


//********declare   Asyncstorage*************//






  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password :'',
      username   :'',
      loading: false,
      error: null,
      myCondition : false,
       showToast: false,
       indeterminate : false,
       authUser : false
    };

///this.getUser = this.getUser.bind(this);
  }

//*****************************//

  setUser(name) {
    this.props.setUser(name);
  }







//********************************//
componentDidMount () {
  //NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);

     /*NetInfo.isConnected.fetch().done(
       (isConnected) => { this.setState({ status: isConnected }); }
     );

console.log("is connected" + this.state.status);*/

//*********chekc if user is logged or not
 this._loadInitialState().done();

console.log("facebook manager" + JSON.stringify(LoginManager));
}









//********************************************//
//********************************************//



_showModal = () => this.setState({ isModalVisible: true })

 _hideModal = () => this.setState({ isModalVisible: false })


//********************************************//
//********************************************//
//********************************************//
componentWillMount() {

 }




/**
 *
 */




//**********get the User**********//

 _loadInitialState = async () => {
    try { var value = await AsyncStorage.getItem("userId");
    console.log("value login"+ value);
       if (value !== null){
         this.setState({authUser :true});
         console.log("authUser"+ this.state.authUser);

         } else {
          console.log("no value sidebar authUser")
          }
         } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
   }
 };








/**
 * [logwithfacebook description]
 * @return [type] [description]
 */

logwithfacebook()
{
  //Actions.home();

console.log("conncetd or not"+ this.state.isConnected);
this.setState({indeterminate:true });

LoginManager.logInWithReadPermissions(['public_profile']).then(
  function(result) {
    if (result.isCancelled) {
      alert('تم إلغاء تسجيل الدخول ');
    } else {
      //alert('Login success with permissions: '
        //+result.grantedPermissions.toString());
        console.log("dd"+ result.grantedPermissions.toString() );
        AccessToken
          .getCurrentAccessToken()
           .then((data) => {
             console.log("data"+ JSON.stringify(data.accessToken));



             //this.initUser(data.accessToken) ;

             const responseInfoCallback = (error, result) => {
                    if (error) {
                      console.log(error)
                      alert('Error fetching data: ' + error.toString());
                    } else {
                      console.log(JSON.stringify(result.name))
                      //alert("hi hi")
                    /*
{"name":"Ahmed Rebai","first_name":"Ahmed","gender":"male","id":"1780793442234310","last_name":"Rebai","picture":{"data":{"is_silhouette":false,"url":"https://fb-s-b-a.akamaihd.net/h-ak-fbx/v/t1.0-1/p50x50/14237739_16503206419…7f4eacdc18&oe=59B6008E&__gda__=1504787158_8e79ae0faf19f8fd569ca70f725cf23f"}}}
                     */
    let info = {}
      info.name = result.name ;
      info.first_name = result.first_name ;
      info.id = result.id ;
      info.last_name = result.last_name ;
      info.photoUrl = result.picture.data.url ;
      info.gender = result.gender ;
      info.email = '' ;
    info.accessToken = data.accessToken;


//console.log("info" + JSON.stringify(info));
    //*****send data to server********//

      fetch('https://gentle-cove-36032.herokuapp.com/api/auth/save', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
         body: JSON.stringify({
           email: result.email,

           photoUrl : result.picture.data.url,
           id : result.id ,
           username: result.name,
           first_name :result.first_name,
           last_name :result.last_name,
           accessToken :data.accessToken,
           gender : result.gender,


         })
       })
       .then((response) => response.json())
       .then((responseData) => {


      console.log("responseDataData" + JSON.stringify(responseData._id));
         //save token**************//


         /*AsyncStorage.setItem('userToken', {'token':
         JSON.stringify(responseData.token), '_id':JSON.stringify(responseData._id)} );*/
//saveData(JSON.stringify(responseData._id),JSON.stringify(responseData.token));
try {
 AsyncStorage.setItem('userId', responseData._id);
  AsyncStorage.setItem('userToken',responseData.token);
  //console.log("go home ");
          Actions.home();
  }catch (err) {
    console.log("err"+ err);
            }







       }).catch((error) =>{

           console.log("error"+ error);
       });






                      //alert('Success fetching data: ' + result.toString());
                      //
                      //send data to server
                    }
                  }
             //email,name,first_name,middle_name,last_name'
                  const infoRequest = new GraphRequest('/me', {
                    accessToken: data.accessToken,
                    parameters: {
                      fields: {
                        string: 'id, name, email, first_name, last_name, gender,picture'
                      }
                    }
                  }, responseInfoCallback);

                  // Start the graph request.
                  new GraphRequestManager()
                    .addRequest(infoRequest)
                    .start()

             })






        //Actions.home();
    }
  },
  function(error) {
    alert('فشل تسجيل الدخول : ' + error);
    console.log("errr"+ error);
  }
);
}



//*********
//*********
SaveUser(data)
{

  fetch('http://192.168.1.4:4040//api/auth/save', {
     method: 'POST',
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
     body: JSON.stringify({
       email: data.email,
       photoUrl : data.photoUrl,
       id : data.id ,
       username: data.name,
       first_name :data.first_name,
       last_name :data.last_name,
       accessToken :data.accessToken,
       gender : data.gender,


     })
   })
   .then((response) => response.json())
   .then((responseData) => {


  console.log("responseDataData" + JSON.stringify(responseData));
     //save token**************//
     //this.saveItem('id_token', responseData.id_token),
     //Alert.alert( 'Signup Success!', 'Click the button to get a Chuck Norris quote!'),
     //AsyncStorage.setItem('userData', JSON.stringify(responseData.token));
     //this.setState({myCondition : false})
        //Actions.home();
   }).catch((error) =>
       {

   });




}







//***********go to Register Component***************
goHome()
{
  console.log("conncetd "+ this.state.isConnected);
  /*Toast.show({

                text: 'لا يوجد إتصال بالأنترنات حاليا ',
                position: 'top',
                buttonText: 'أغلق'
              })*/
  Actions.home();
}





















  render() {

const {width, heigth} = Dimensions.get('window');


    return (
      <Container animation="fadeIn" useNativeDriver>

          <Header>
                            <Left>
                                <Button transparent>
                                    <Icon name='sign-in' />
                                </Button>
                            </Left>
                            <Body>
                            <Animatable.Text animation="zoomInUp">
                                <Title> تسجيل دخول </Title>
                                </Animatable.Text>
                            </Body>

                        </Header>










<Image source={require('../../../images/backgtest.jpeg')} style={{
  flex: 1,
      width: width,
      height: heigth,
      resizeMode: 'cover' ,
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center'}}>







{ this.state.indeterminate && <Progress.CircleSnail indeterminate={this.state.indeterminate}
 size={80} color={['#2196f3', '#3f51b5', '#2962ff']} showsText={true} />
 }


                               <Button  style={styles.btn} onPress={this.logwithfacebook.bind(this)} full primary bordered  rounded >
                          <Image
                        source={require('../../../images/social/facebook.png')}
                        fadeDuration={0}
                        style={{width: 20, height: 20}}
                        />
    <Animatable.Text animation="fadeInLeftBig">
                            <Text style={styles.btnText}>  تسجيل حساب فيسبوك </Text>
              </Animatable.Text>
              <Text> {this.state.authUser} </Text>
                          </Button>




                        { !this.state.authUser  &&  <Button style={styles.btn} onPress={this.goHome.bind(this)} style={{marginTop :50}}full bordered info rounded>
                          <Animatable.Text animation="fadeInRightBig">
                          <Text style={styles.btnText2}> أنا ضيف دخول كزائر </Text>
                            </Animatable.Text>

                        </Button>
                      }


      </Image>








                   </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}

Login = Animatable.createAnimatableComponent(Login);
export default connect(null, bindActions)(Login);
