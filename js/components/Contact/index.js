
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title,  Card, CardItem, Text, Icon,Left , Right,Button,Body
,Content, List, ListItem, Thumbnail } from 'native-base';
import { Image} from 'react-native';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class ContactPage extends Component {




  constructor(props) {
     super(props);

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
            <Title>{(name) ? this.props.name : 'تواصل معنا'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>

        <Right>

  <Text style={{color :'#2196f3',fontWeight :'bold', fontSize:20}}> إتصل بنا </Text>
        </Right>


           <List>

                       <ListItem>
                            <Right>
                           <Thumbnail square size={80} source={require('../../../images/facebook.png')} />
                           </Right>
                           <Body>
                               <Text>عبر صفحة الفيسبوك  </Text>
<Text style={{color :'#2196f3'}} note>moultakaalchouarae@gmail.com </Text>
                           </Body>
                       </ListItem>







                       <ListItem>
                       <Right>
                           <Thumbnail square size={80} source={require('../../../images/twitter.png')} />
                         </Right>
                           <Body>
                               <Text>عبر التويتر </Text>
                               <Text style={{color :'#2196f3'}} note>moultakaalchouarae@gmail.com </Text>

                           </Body>
                       </ListItem>





                       <ListItem>
                           <Thumbnail square size={80} source={require('../../../images/email.png')} />
                           <Body>
                               <Text>عبر البريد الكتروني </Text>
                               <Text style={{color :'#2196f3'}} note>moultakaalchouarae@gmail.com </Text>
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
  name: '',
  index: state.list.selectedIndex,
  list: [],
});


export default connect(mapStateToProps, bindAction)(ContactPage);
