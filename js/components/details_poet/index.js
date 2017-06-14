
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right,Card, CardItem, Text, Body,
List, ListItem,Thumbnail,InputGroup, Input ,Picker,Badge,H3, Fab, Picker } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import FireAuth from 'react-native-firebase-auth';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var data = require('../../Poetes.json');

import MOCKED_Poetes_DATA from './PoetesFake'


class PoetDetailsPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

//*******************************//
//*******************************//



  constructor(props) {
       super(props);
       this.state = {
           selectedItem: undefined,
           selected1: 'key1',
           results: {
               items: []
           },
           active: true
       }
   }


//******************************//
onValueChange (value: string) {
       this.setState({
           selected1 : value
       });
   }

//***********************************//
//***********************************//

   onValueChange (value: string) {
       this.setState({
           selected1 : value
       });
   }

  componentWillMount() {


console.log("mocked data is"+ MOCKED_Poetes_DATA.length);

    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
    .then((res) => res.json())
    .then((data) => {
      /*this.setState({
        hugeText: data.something
      });*/
      console.log("data isss s " + data);
    });
  }





  render() {
    const { props: { name, index, list } } = this;
var poetescategory1 = MOCKED_Poetes_DATA[0];
    return (
      <Container style={styles.container}>

      <Header>


        <Body>
          <Title>{(name) ? this.props.name : 'اهم الشعراء العرب '}</Title>
        </Body>

        <Right>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Right>
      </Header>



        <Content padder>





        <List>
                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
                                </Body>
                            </ListItem>



                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
                                </Body>
                            </ListItem>



                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
                                </Body>
                            </ListItem>



                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
                                </Body>
                            </ListItem>



                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
                                </Body>
                            </ListItem>


                            <ListItem>
                                <Thumbnail  size={80} source={require('../../../images/poetes/mahmouddarwich.jpg')} />
                                <Body>
                                    <Text> محمود درويش </Text>
                                    <Text note>
                                     أحد أهم الشعراء الفلسطينيين والعرب والعالميين الذين ارتبط اسمهم بشعر الثورة والوطن
                                     </Text>
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


export default connect(mapStateToProps, bindAction)(PoetsPage);
