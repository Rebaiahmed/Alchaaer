
import React, { Component } from 'react';
import { Image,Dimensions ,AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Button, View, Text,
Form, Item, Input,Label,Toast,H3,Header, Left, Body,Right,Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import { setUser } from '../../actions/user';
import styles from './styles';
import * as Progress from 'react-native-progress';

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
} = FBSDK;





validator = require("email-validator");



class Register extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      username :'',
      email: '',
      password :'',
      error: null,
       showToast: false,
         myCondition : false,
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }


  goToLOgin()
  {
    console.log("navigate to login component")
    Actions.login();
  }

  isValid() {
      const { username , password, email } = this.state;
      let valid = false;

      if (email.length > 0 && password.length > 0 && username.length > 0 ) {
        valid = true;
      }

      if (email.length === 0) {
        this.setState({ error: 'You must enter an email address' });
      } else if (password.length === 0) {
        this.setState({ error: 'You must enter a password' });
      }else if(username.length ===0)
      {
      this.setState({ error: 'You must enter a password' });
      }

      return valid;
    }

    //******************************************************//
    //******************************************************//


onSignIn()
{

  const { username , password, email } = this.state;

  if (email.length == 0 ||  password.length == 0 || username.length == 0 ) {
    Toast.show({

                  text: 'يجب ملئ جميع الخانات ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
  }
  else if (!validator.validate(email)){

    Toast.show({

                  text: 'البريد الإلكتروني غير صالح ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
    this.setState({email : ''})

  }else if ( username.length<=5)
  {
    Toast.show({

                  text: 'اسم المستخدم قصير جدا ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
        this.setState({username : ''})

  }else if (password.length<=6)
  {

    Toast.show({

                  text: 'كلمة المرور قصيرة جدا ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
    this.setState({password : ''})
  }else{

    this.setState({myCondition : true})


     firebaseAuth.createUserWithEmailAndPassword(
           this.state.email,
           this.state.password).then(() => {
             // then and catch are methods that we call on the Promise returned from
             // createUserWithEmailAndPassword
             alert('تم تسجيل حساب بنجاح ');
             this.setState({
               // Clear out the fields when the user logs in and hide the progress indicator.
               email: '',
               password: '',
               username :'',
               loading: false
             });
             AsyncStorage.getItem('userData').then((user_data_json) => {

               let userData = JSON.parse(user_data_json);
               console.log('user data'+ userData);
               userData.username = this.state.username ;
                console.log("will be"+ JSON.stringify(userData));
               //AsyncStorage.setItem('userData', JSON.stringify(userData));
               /*this.setState({
                 user: userData,
                 loading: false
               });*/
             });
this.setState({myCondition : false})

             //Actions.home();

         }).catch((error) => {
           // Leave the fields filled when an error occurs and hide the progress indicator.
           this.setState({
             loading: false,
             username :'',
             email: '',
             password :'',
             myCondition : false
           });

           alert("أخفق إنشاء الحساب : " + error.message );

         });

  }




}


//****************Register*************************//

Register()
{

  const { username , password, email } = this.state;

  if (email.length == 0 ||  password.length == 0 || username.length == 0 ) {
    Toast.show({

                  text: 'يجب ملئ جميع الخانات ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
  }
  else if (!validator.validate(email)){

    Toast.show({

                  text: 'البريد الإلكتروني غير صالح ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
    this.setState({email : ''})

  }else if ( username.length<=5)
  {
    Toast.show({

                  text: 'اسم المستخدم قصير جدا ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
        this.setState({username : ''})

  }else if (password.length<=6)
  {

    Toast.show({

                  text: 'كلمة المرور قصيرة جدا ',
                  position: 'top',
                  buttonText: 'أغلق'
                })
    this.setState({password : ''})
  }else{

    //this.setState({myCondition : true})


    fetch('http://192.168.1.6:4040/api/auth/Register', {
   method: 'POST',
   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
   body: JSON.stringify({
     username: this.state.username,
     password: this.state.password,
     email : this.state.email
   })
 }).then((response) => response.json())
  .then((responseData) => {
             // then and catch are methods that we call on the Promise returned from
             // createUserWithEmailAndPassword
             console.log("response data" + responseData);
             alert('تم تسجيل حساب بنجاح ');
             this.setState({
               // Clear out the fields when the user logs in and hide the progress indicator.
               email: '',
               password: '',
               username :'',
               loading: false
             });
             this.setState({myCondition : false})
              //AsyncStorage.setItem('userData', JSON.stringify(responseData.token));

               //Actions.home();



         }).catch((error) => {
           // Leave the fields filled when an error occurs and hide the progress indicator.
           this.setState({
             loading: false,
             username :'',
             email: '',
             password :'',
             myCondition : false
           });

           alert("أخفق إنشاء الحساب : " + error.message );

         });

  }


}






//******************************************************//
//******************************************************//

logwithfacebook()
{
  LoginManager.logInWithReadPermissions(['public_profile']).then(
  function(result) {
    if (result.isCancelled) {
      alert('تم إلغاء تسجيل الدخول ');
    } else {
      alert('Login success with permissions: '
        +result.grantedPermissions.toString());
      console.log("user"+ JSON.stringify(result));
      //  AsyncStorage.setItem('userData', JSON.stringify(userData));
          //Actions.home();
    }
  },
  function(error) {
      alert('فشل تسجيل الدخول. حاول مرة اخرى '+error);
  }
);
}
//****************************//

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
                                  <Title>تسجيل حساب </Title>
                                    </Animatable.Text>
                              </Body>

                          </Header>


                         <Content>

                         {this.state.myCondition && <Progress.Circle size={30} indeterminate={true} style={{position: 'absolute', left: width/2, height: heigth/2, justifyContent:'center',alignItems:'center'}}/>
                         }
                             <Form>

                             <Item floatingLabel last>
                                 <Label>البريد الإلكتروني </Label>
                                 <Input value={this.state.email} onChangeText={(email) => this.setState({email})} />
                             </Item>

                             <Item floatingLabel>
                                    <Label>إسم المستخدم </Label>
                                    <Input value={this.state.username} onChangeText={(username) => this.setState({username})} />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>كلمة المرور </Label>
                                    <Input value={this.state.password} secureTextEntry onChangeText={(password) => this.setState({password})} />
                                </Item>



                                <Button onPress={this.Register.bind(this)} style={{marginTop :50}} full rounded>
                                  <Animatable.Text animation="zoomInUp">
                                <Text>تسجيل حساب</Text>
                                </Animatable.Text>
                             </Button>
                             </Form>

                             <Button  style={styles.btn} onPress={this.logwithfacebook.bind(this)} full primary bordered  rounded >
                        <Image
                      source={require('../../../images/social/facebook.png')}
                      fadeDuration={0}
                      style={{width: 20, height: 20}}
                      />

                      <Animatable.Text animation="fadeInLeftBig">

                          <Text style={styles.btnText}>  تسجيل حساب فيسبوك </Text>
                    </Animatable.Text>
                        </Button>


                        <Button onPress={this.goToLOgin.bind(this)} style={{marginTop :50}} info full rounded>
                        <Animatable.Text animation="fadeInRightBig">
                        <Text> هل تملك حساب ? </Text>
                        </Animatable.Text>
                     </Button>

                         </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}
Register = Animatable.createAnimatableComponent(Register);

export default connect(null, bindActions)(Register);
