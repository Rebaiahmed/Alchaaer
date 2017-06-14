
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container,Content, Header, Title, Form, Item, Input,Label,Button,Left,Right
,Card, CardItem,Footer, FooterTab, Icon, Text,Body,Badge } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
var Dimensions = require('Dimensions');
import * as Animatable from 'react-native-animatable';

class MyPublicationsPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
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
            <Title>{(name) ? this.props.name : 'Modify profile'}</Title>
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
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                              MyPublicationsPage
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                   </Card>


        </Content>


        <Footer >
                            <FooterTab>
                                <Button badge vertical>
                                    <Badge><Text>2</Text></Badge>
                                    <Icon name="apps" />
                                    <Text>Publications</Text>
                                </Button>
                                <Button>
                                    <Icon name="camera" />
                                    <Text>Notifications</Text>
                                </Button>
                                <Button active badge vertical>
                                    <Badge ><Text>51</Text></Badge>
                                    <Icon active name="navigate" />
                                    <Text>Messages</Text>
                                </Button>
                                <Button>
                                    <Icon name="person" />
                                    <Text>Profile</Text>
                                </Button>
                            </FooterTab>
                        </Footer>









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

MyPublicationsPage  = Animatable.createAnimatableComponent(MyPublicationsPage );
export default connect(mapStateToProps, bindAction)(MyPublicationsPage);
