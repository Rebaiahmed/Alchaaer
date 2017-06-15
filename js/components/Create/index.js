
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {   AsyncStorage} from 'react-native' ;
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
Card, CardItem,InputGroup, Toast,Input,Spinner } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';


var Dimensions = require('Dimensions');


class CreatePage extends Component {





  constructor(props) {
     super(props);
 //var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');


    this.state = {
      title: '',
      content :'',
      error: '',
       showToast: false,
       loading : false,
       userId : null,
         myCondition : false,
    };
/*
title: {
  type: String,
  unique: true,
},
date_creation: Date,
photoUrl: String,
contenu : String,
comments: Array,
likes: Array,
publisher : Object,
country : String
 */
}


  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

//************validate data**********************//
//************
//**************validate data******************//
  isValid() {
      const { title, content } = this.state;
      let valid = false;



      if (title.length >0) {
        //valid = true;
        //check for the content
        if(content.length<=10)
         {
            this.setState({ error: 'ألرجاء أن لا يقل عدد حروف ألقصيدة عن 10 حروف' });
         }else{
           valid = true ;
         }
      }else{
        this.setState({ error: 'ألرجاء ملئ خانة ألعنوان ' });
      }

      return valid;
    }


//********************************************//
//********************************************//


componentWillMount() {
  console.log("component create");
 this._loadInitialState().done();

  }


  _loadInitialState = async () => {
     try { var value = await AsyncStorage.getItem("userId");
     console.log("value is" + value);
        if (value !== null){
            this.setState({userId : value});
          } else {
           console.log("no value sidebar authUser")
           }
          } catch (error) {
     console.log('AsyncStorage error: ' + error.message);
    }
  };


//*************************//


//*********************//


Create()
{



if( this.isValid())
{
      //this.poemesRef = myFirebaseRef.child('poemes');
      //set loading to true
this.setState({loading:true});


      const { title, content,userId } = this.state;
console.log("title is"+ title + "content is" + content + "userId" + userId);
  //****add the date************//
  //get teh currentUser and his country ****
  var date = new Date();
  /*this.poemesRef.push({ title: title, content : content , date_creation : date,
    nblikes:0,nb_comments :0,likes :[],comments :[],country:'Tunisia',photoUrl :'',
    user :this.state.user
  })*/

        fetch('http://192.168.1.5:4040/api/publications', {
           method: 'POST',
           headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },


           body: JSON.stringify({
            title : title ,
            content : content,
            userId  : userId


           })
         })
         .then((response) => response.json())
         .then((responseData) => {
             console.log("created !");
             Alert("created !");

             Toast.show({
                             text: ' تم إضافة المحتوى بنجاح' ,
                             position: 'bottom',
                             buttonText: 'أغلق',


                           })
             this.setState({loading:false});
             Actions.home();

         }).catch(err=>{
           console.log("err"+ err);
           Alert("حدث خلل، الرجاء المحاولة لاحقا ")
         })






//Actions.home();
//setTimeout(() => Actions.home(), 500);

}else{
  //***get the error************//
    const { error } = this.state;
    console.log("the eror is"+ error);
    Toast.show({
                  text: 'ألرجاء ملئ جميع ألفراغات ',
                  position: 'bottom',
                  buttonText: 'أغلق',


                })
}









}

//***************************/
//***************************/

Cancel()
{

   this.setState({  title :'', content :''  });
   Toast.show({
                 text: 'تم إلغاء ما كتبته ',
                 position: 'bottom',
                 buttonText: 'أغلق',


               })
}







  render() {
    const { props: { name, index, list } } = this;
    const {width, heigth} = Dimensions.get('window');

    return (
      <Container style={styles.container}>
        <Header>


        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
          <Body>
            <Title>{(name) ? this.props.name : ' أنشر شعرك'}</Title>
          </Body>

        </Header>

        <Content padder>







                           <Card>

                           { this.state.loading && <Progress.Circle
                            size={100}  showsText={true} style={{position: 'absolute', justifyContent:'center',alignItems:'center'}} />
                            }
                                           <CardItem header>

    <InputGroup rounded>

  <Input placeholder='عنوان القصيدة '   onChangeText={(title) => this.setState({title})}/>
            </InputGroup>
                                           </CardItem>
                                           <CardItem>
                                               <Body>
                    <InputGroup rounded borderType='regular'>
                    <Input style={{
                        width: 200, height: 200
                    }}  multiline={true} placeholder= 'محتوى القصيدة '
                    onChangeText={(content) => this.setState({content})}/>
                </InputGroup>
                                               </Body>
                                           </CardItem>
                                           <CardItem header>

                                           <Row size={12}>
                                              <Col sm={6} md={4} lg={3}>

                                                <Button onPress={this.Create.bind(this)} bordered rounded info>
                                                     <Text>أنشر</Text>
                                                 </Button>

                                              </Col>
                                              <Col sm={6} md={4} lg={3}>

                                                <Button onPress={this.Cancel.bind(this)} bordered rounded danger>
                                                     <Text>إلغاء </Text>
                                                 </Button>

                                              </Col>
                                            </Row>
                                           </CardItem>
                                      </Card>



        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

/*const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});*/


export default connect(null,bindAction)(CreatePage);
