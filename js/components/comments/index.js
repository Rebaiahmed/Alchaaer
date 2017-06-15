
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
InputGroup, Input,List, ListItem,Item,Thumbnail,Footer ,Alert } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class CommentsPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }



  constructor(props) {
     super(props);

     console.log("comment props" + JSON.stringify(props.pubId));

     this.state ={
       userId :'',
       comment :'',
       pub :''
     }

   }




//***********************//

//***********get the currentUser******************//
_loadInitialState = async () => {

   try { var value = await AsyncStorage.getItem("userId");
   console.log("value home"+ value);
      if (value !== null){
        this.setState({userId : value});
        } else {
         console.log("no value sidebar authUser")
         }
        } catch (error) {
   console.log('AsyncStorage error: ' + error.message);
  }
}

//*************addComment**************//


addComment()
{

  const comment = this.state.comment ;
const pubId = this.props.pubId ;
const userId = this.state.userId ;
console.log("data send to server"+ pubId +
"coment" + comment + "userId" + userId);

  fetch('http://192.168.1.5:4040/api/publications/comments/' + pubId +'', {
     method: 'PUT',
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },


     body: JSON.stringify({
      commentBody : comment ,
      userId  : userId,
      pubId : pubId


     })
   })
   .then((response) => response.json())
   .then((responseData) => {
       console.log("reposnse data comment" + JSON.stringify(responseData));
       Alert("created !");
       this.setState({loading:false});
this.setState({comment :''});

   }).catch(err=>{
     console.log("err"+ err);
     this.setState({comment :''});
   })

   //*****
 this.setState({comment :''});
}


//*********cancel adding comment****************//
Cancel()
{

   this.setState({ comment :'' });
   Toast.show({
                 text: 'تم إلغاء ما كتبته ',
                 position: 'bottom',
                 buttonText: 'أغلق',


               })
}





//*************Determine Publication comment***************//
determinePub()
{

const id = this.props.pubId ;
if(id)
{
  fetch('http://192.168.1.5:4040/api/publications/'+ id + '', {
     method: 'GET',
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

   })
   .then((response) => response.json())
   .then((responseData) => {
  console.log("pub" + JSON.stringify(responseData));
    this.setState({pub:responseData});

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





//***************//

componentDidMount() {

this.determinePub();

}

  render() {


    return (
      <Container style={styles.container}>

      <Header>


      <Left>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-back" />
        </Button>
      </Left>
        <Body>
          <Title> التعليقات </Title>
        </Body>

      </Header>

        <Content padder>
        <List>
        <ListItem avatar>
                               <Left>
                                   <Thumbnail source={require('../../../images/arab.png')} />
                               </Left>
                               <Body>
                                   <Text>Kumar Pratik</Text>
                                   <Text note>Doing what you like will always keep you happy . .</Text>
                               </Body>
                               <Right>
                                   <Text note>3:43 pm</Text>
                               </Right>
                           </ListItem>


              </List>








                  <InputGroup rounded borderType='regular'>
                  <Input style={{
                      width: 120, height: 120
                  }}  multiline={true} placeholder= 'أضف تعليقا'
                 onChangeText={(comment) => this.setState({comment})}/>
                </InputGroup>



                       <Button  bordered block onPress={this.addComment.bind(this)}>
                            <Text>أضف</Text>
                        </Button>



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

const mapStateToProps = state => ({
  name: '',
  index: state.list.selectedIndex,
  list: [],
});


export default connect(null, bindAction)(CommentsPage);
