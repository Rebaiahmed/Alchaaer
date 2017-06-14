
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Left, Right, Body
, Fab,H2,Card ,CardItem} from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';





class AboutPage extends Component {



//*****************************//
//*****************************//
constructor() {
  super();
      this.state = {
          active: 'true'
      };
  }

//********************************//




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
            <Title>{(name) ? this.props.name : 'حول التطبيق '}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <ActionButton buttonColor="rgba(231,76,60,1)">
               <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                 <Icon name="me-create" style={styles.actionButtonIcon} />
               </ActionButton.Item>
               <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                 <Icon name="me-notifications-off" style={styles.actionButtonIcon} />
               </ActionButton.Item>
               <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                 <Icon name="md-done-all" style={styles.actionButtonIcon} />
               </ActionButton.Item>
             </ActionButton>


        <Content>











        <Card>
                   <CardItem header>
                       <H2 style={{textAlign :'center'}}> خواطر شعراء </H2>
                   </CardItem>
                   <CardItem>
                       <Body>
                           <Text>
                              يمكن هذا التطبيق  يمكن هذا التطبيق  يمكن هذا التطبيق
                              يمكن هذا التطبيق  يمكن هذا التطبيق  يمكن هذا التطبيق
                              يمكن هذا التطبيق  يمكن هذا التطبيق  يمكن هذا التطبيق
                           </Text>
                       </Body>
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


export default connect(mapStateToProps, bindAction)(AboutPage);
