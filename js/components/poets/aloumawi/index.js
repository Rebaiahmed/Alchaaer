
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right,Card, CardItem, Text, Body,
List, ListItem,Thumbnail,InputGroup, Input ,Picker,Badge,H3, Fab,Item } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
var _ = require('underscore');





class PoetsAloumawiPage extends Component {

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
    
   }


//***********************************//
//***********************************//



  componentWillMount() {
  }





  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>

      <Header>


        <Body>
          <Title>{(name) ? this.props.name : 'أهم شعراء العصر الأموي ' }</Title>
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
                            <Thumbnail square size={80} source={require('../../../../images/poetes/alabassi/aboufirass.jpeg')} />
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


export default connect(mapStateToProps, bindAction)(PoetsAloumawiPage);
