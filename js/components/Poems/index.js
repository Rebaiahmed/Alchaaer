
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Icon, Left, Right,Card, CardItem, Text, Body,
List, ListItem,Thumbnail,InputGroup, Input ,Picker,Badge,H3, Fab} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

class PoemesPage extends Component {



  constructor(props) {
     super(props);
 //var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');

  /*  this.poemesRef = myFirebaseRef.child('informations');
    console.log("refrence est "+  this.poemesRef);*/
    this.state = {
      title: '',
      content :'',
      error: '',
       showToast: false,
       loading : false
    };
}



NavigateToDetails(article)
{
  console.log("string is "+ article);


/*var myFirebaseRef = new Firebase('https://react-native-login-app.firebaseio.com');
this.articleRef = myFirebaseRef.child(article);
console.log("Article is"+ this.articleRef);
/*this.articleRef.on('value', (snap) => {

  // get children as an array

  snap.forEach((child) => {
    console.log("child is"+ child.val());
  });

})*/
Actions.PoemeDetailsPage({"titre":article})





  //Actions.home()
//Actions.PoemeDetailsPage({"item":item})}
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


                 <List>
                                      <ListItem onPress={() =>Actions.PoemeDefenitionPage()}>
                                          <Thumbnail square size={80} source ={ require('../../../images/poemes/defenition.jpg')} />
                                          <Body>
                                            <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeDefenitionPage()} >تعريف الشعر العربي </Text>
                                                </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeDefenitionPage()} note > قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>


                                      <ListItem  onPress={() =>Actions.PoemeImportance()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/image.jpg')} />
                                          <Body>
                                          <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeImportance()} >أهمية الشعر </Text>
                                              </Animatable.Text>
                                              <Text note onPress={() =>Actions.PoemeImportance()} > قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>


                                      <ListItem onPress={() =>Actions.PoemeRedaction() }>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/write.jpg')} />
                                          <Body>
                                            <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeRedaction()}>كيف أتعلم اكتب شعر </Text>
                                              </Animatable.Text>
                                              <Text note onPress={() =>Actions.PoemeRedaction() }> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>


                                      <ListItem onPress={() =>Actions.PoemeEtapes()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/history.jpg')} />
                                          <Body>
                                              <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeEtapes()}>مراحل تطور الشعر العربي </Text>
                                              </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeEtapes()} note> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>



                                      <ListItem onPress={() =>Actions.PoemeBouhour()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/bouhour.jpg')} />
                                          <Body>
                                            <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeBouhour()}>بحور الشعر العربي وتفعيلاتها </Text>
                                              </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeBouhour()}> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>







                                      <ListItem onPress={() =>Actions.PoemeCriteres()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/critere.jpg')} />
                                          <Body>
                                              <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeCriteres()}>خصائص الشعر العربي الحديث </Text>
                                                  </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeCriteres()} note> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>



                                      <ListItem onPress={() =>Actions.PoemeAjaeb()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/magic.jpg')} />
                                          <Body>
                                            <Animatable.Text animation="zoomInUp">
                                              <Text onPress={() =>Actions.PoemeAjaeb()}>عجائب الشعر العربي </Text>
                                                </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeAjaeb()} note> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>


                                      <ListItem onPress={() =>Actions.PoemeModhhaka()}>
                                          <Thumbnail square size={80} source={require('../../../images/poemes/smile.jpg')} />
                                          <Body>
                                            <Animatable.Text animation="slideInRight">
                                              <Text onPress={() =>Actions.PoemeModhhaka()}>ابيات شعر مضحكه</Text>
                                                </Animatable.Text>
                                              <Text onPress={() =>Actions.PoemeModhhaka()} note> قراءة ألمزيد. . .</Text>
                                          </Body>
                                      </ListItem>



                                  </List>




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

PoemesPage= Animatable.createAnimatableComponent(PoemesPage);
export default connect(mapStateToProps, bindAction)(PoemesPage);
