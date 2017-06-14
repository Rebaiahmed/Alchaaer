
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class PoemeDetailsPage extends Component {



  constructor(props) {


     super(props);


this.state={
  Article :{}
}

console.log("propos"+ this.props.titre);
var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');
this.articleRef = myFirebaseRef.child(this.props.titre);


//console.log("Article is"+ this.articleRef.equalTo('Article1'));

}



//**********add to Favorites***********//

addFavorites()
{
  console.log("iic add to favorite");
}


//******************load Article*************//

loadArticle(article)
{


  var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');
  this.articleRef = myFirebaseRef.child(article);


  //console.log("Article load  is"+ this.articleRef.equalTo('Article1'));

  //var data =this.articleRef.orderByChild('word').equalTo('noun')
  this.articleRef.on('value', (snap) => {

    // get children as an array
//console.log("the snap is"+  JSON.stringify(snap));

this.setState({Article :snap })


  })


}

//*********************************//

loadArticleV2(article)
{
  var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');
  this.articlesRef = myFirebaseRef.child("articles");
  console.log("artciles"+ this.articlesRef);
var article = this.articlesRef.equalTo('Article1');
console.log("arrara "+ article);

this.articlesRef.on('value', (snap) => {

  // get children as an array
     console.log("snam"+ snap.val() + " Title " +snap.val().Title );
     var newPost = snap.val();
console.log("snap"+ newPost.Title + "ocntent"+ newPost.content + "dd" + newPost.Content);
     snap.forEach((child) => {

    console.log(child.key()+": "+child.val().Title + "con" );
     this.setState({
       Article :{
         Title :  child.val().Title
       }
     })
               /*items.push({
                   title: child.val().title,
                   desc: child.val().desc,
                   _key: child.key
               });ù*/

             })
});


console.log("state article is"+this.state.Article);


}





//*****************************//

componentDidMount() {

this.loadArticle(this.props.titre);
console.log("state article is"+this.state.Article);
this.loadArticleV2(this.props.titre);

}





  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'الشعر العربي '}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>

        <Card >
                               <CardItem>
                                   <Left>
                                       <Thumbnail source={require('../../../images/component_poemes/alchaerealarabi.jpg')} />
                                       <Body>
                                           <Text>{ this.state.Article.Title }</Text>
                                           <Text note>GeekyAnts</Text>
                                       </Body>
                                   </Left>
                                 </CardItem>
                                 <CardItem cardBody>

                                 </CardItem>
                                 <CardItem content>
                                     <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                                     Are you telling me that you built a time machine... out of a DeLorean?!
                                     Whoa. This is heavy.</Text>
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

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(PoemeDetailsPage);
