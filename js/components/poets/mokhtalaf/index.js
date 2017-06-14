
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right,Card, CardItem, Text, Body,
List, ListItem,Thumbnail,InputGroup, Input ,Picker,Badge,H3, Fab,Item } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
var _ = require('underscore');
var data = require('../../Poetes.json');

import MOCKED_Poetes_DATA from './PoetesFake'


class PoetsMokhtalafPage extends Component {

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
       list =_.where(MOCKED_Poetes_DATA,{id :1 } );
       console.log("List si"+ JSON.stringify( list[0].poetes ));
       this.state = {
           selectedItem: undefined,
           selected1: 'key0',
           results: {
               items: list[0].poetes
           },
           active: true
       }
     console.log("" + JSON.stringify(this.state.results.items));
   }


//***********************************//
//***********************************//

   onValueChange (value: string) {
     console.log("the value is"+ value);
       this.setState({
           selected1 : value
       });
var list = _.where(MOCKED_Poetes_DATA,{id :value } ) ;
 //console.log("List si"+ JSON.stringify( list[value].poetes ));
  //this.setState({ results: list[value].poetes  });
    //***********Faire le Filtrage************//
    //***********F//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
   }

  componentWillMount() {
  }





  render() {
    const { props: { name, index, list } } = this;
var poetescategory1 = MOCKED_Poetes_DATA[0];
var items = this.state.results.items ;
    return (
      <Container style={styles.container}>

      <Header>


        <Body>
          <Title>{(name) ? this.props.name : 'شعراء العصر الحديث ' }</Title>
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
                            <Thumbnail square size={80} source={require('../../../images/poetes/alabassi/aboufirass.jpeg')} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
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


export default connect(mapStateToProps, bindAction)(PoetsMokhtalafPage);
