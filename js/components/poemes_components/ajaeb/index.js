
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title,H2, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/magic.jpg');
import * as Animatable from 'react-native-animatable';
class PoemeAjaeb extends Component {



  constructor(props) {


     super(props);


this.state={
  Article :{}
}


//console.log("Article is"+ this.articleRef.equalTo('Article1'));

}



//**********add to Favorites***********//

addFavorites()
{
  console.log("iic add to favorite");
}



//*********************************//









//*****************************//

componentDidMount() {



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
<Animatable.Text animation="zoomIn">
            <Title>{(name) ? this.props.name : 'عجائب الشعر العربي  '}</Title>
</Animatable.Text>
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


                                       <Body>
                                           <Text style={{fontSize :20,
                                           fontWeight :'bold',textAlign:'center'}}> خصائص الشعر العربي الحديث</Text>
      </Body>

                                 </CardItem>
                                 <CardItem cardBody>
                                      <Image source={background} style={{width: 400, height: 400}}/>
                                 </CardItem>
      </Card>











      <Card>

      <CardItem header>
                            <H2>عجائب الشعر العربي </H2>
            </CardItem>
                       <CardItem>
                       <Right>
                <Thumbnail square size={80} source={require('../../../../images/arabian-magic-lamp.png')} />
  </Right>
        </CardItem>
  <CardItem>
                         <Body>
                        <Text>
                        كُن عادلاً قبل أن تكون كريماً...
</Text>
                 </Body>
                        </CardItem>


                        <CardItem>
                        <Right>
                 <Thumbnail square size={80} source={require('../../../../images/arabian-magic-lamp.png')} />
   </Right>
         </CardItem>
   <CardItem>
                          <Body>
                         <Text>
                         كُن عادلاً قبل أن تكون كريماً...
 </Text>
                  </Body>
                         </CardItem>



                         <CardItem>
                         <Right>
                  <Thumbnail square size={80} source={require('../../../../images/arabian-magic-lamp.png')} />
    </Right>
          </CardItem>
    <CardItem>
                           <Body>
                          <Text>
                          كُن عادلاً قبل أن تكون كريماً...
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

PoemeAjaeb= Animatable.createAnimatableComponent(PoemeAjaeb);
export default connect(mapStateToProps, bindAction)(PoemeAjaeb);
