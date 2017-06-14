
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body,
List, ListItem, Thumbnail,Fab,Card, CardItem, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class FavorisPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  constructor() {
    super()
         this.state = {
             active: 'true'
         };
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
            <Title>{(name) ? this.props.name : 'ألمفضلة '}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>





        <Content padder>



        <Card>
                                <CardItem header>
                                    <Text>لا يوجد مفضلة ألآن </Text>
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
  name: '',
  index: state.list.selectedIndex,
  list: [],
});


export default connect(mapStateToProps, bindAction)(FavorisPage);
