
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H1, H2, H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/bouhour.jpg');
import * as Animatable from 'react-native-animatable';
class PoemeBouhour extends Component {



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
            <Title>{(name) ? this.props.name : 'بحور الشعر العربي وتفعيلاتها '}</Title>
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
                                           fontWeight :'bold',textAlign:'center'}}> بحور الشعر العربي</Text>
      </Body>

                                 </CardItem>
                                 <CardItem cardBody>
                                      <Image source={background} style={{width: 400, height: 400}}/>
                                 </CardItem>
      </Card>


      <Card>
                       <CardItem>
                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                          <H2 style={{color :'#2196F3'}}>البحر الطويل، ووزنه </H2>
        </CardItem>
 <CardItem>
                         <Body>
                             <Text>
                             فعولُنْ مَفَاعيلُنْ فعولُنْ مَفَاعيلُنْ ** فعولُنْ مَفَاعيلُنْ فعولُنْ مَفَاعيلُنْ.
                             </Text>
                 </Body>
                        </CardItem>
                      </Card>


                      <Card>
                                       <CardItem>
                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                          <H2 style={{color :'#2196F3'}}>البحر المديد، ووزنه:</H2>
                        </CardItem>
                    <CardItem>
                                         <Body>
                                             <Text>
                                             فاعِلاتُن فاعلُن فاعِلاتُن فاعلُن** فاعِلاتُن فاعلُن فاعِلاتُن فاعلُن
                                             </Text>
                                 </Body>
                                        </CardItem>
                                      </Card>



                                      <Card>
                                                       <CardItem>
                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                          <H2 style={{color :'#2196F3'}}>البحر البسيط، ووزنه:</H2>
                                        </CardItem>
                                    <CardItem>
                                                         <Body>
                                                             <Text>
                                                             مُسْتَفْعِلُن فاعِلُنْ مُسْتَفْعِلُن فاعِلُنْ ** مُسْتَفْعِلُن فاعِلُنْ مُسْتَفْعِلُن فاعِلُنْ
                                                             </Text>
                                                 </Body>
                                                        </CardItem>
                                                      </Card>



                                                      <Card>
                                                                       <CardItem>
                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                          <H2 style={{color :'#2196F3'}}>البحر البسيط، ووزنه:</H2>
                                                        </CardItem>
                                                    <CardItem>
                                                                         <Body>
                                                                          <Text>
                                                                          مُسْتَفْعِلُن فاعِلُنْ مُسْتَفْعِلُن فاعِلُنْ ** مُسْتَفْعِلُن فاعِلُنْ مُسْتَفْعِلُن فاعِلُنْ


                                                                          </Text>
                                                                 </Body>
                                                                        </CardItem>
                                                                      </Card>


                                                                      <Card>
                                                                                       <CardItem>
                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                        </CardItem>
                                                                    <CardItem>
                                                                                         <Body>
                                                                                      <Text>
                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

</Text>
                                                                                 </Body>
                                                                                        </CardItem>
                                                                                      </Card>


                                                                                      <Card>
                                                                                                       <CardItem>
                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                        </CardItem>
                                                                                    <CardItem>
                                                                                                         <Body>
                                                                                                      <Text>
                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

                                                                                  </Text>
                                                                                                 </Body>
                                                                                                        </CardItem>
                                                                                                      </Card>

                                                                                                      <Card>
                                                                                                                       <CardItem>
                                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                                        </CardItem>
                                                                                                    <CardItem>
                                                                                                                         <Body>
                                                                                                                      <Text>
                                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

                                </Text>
                                                                                                                 </Body>
                                                                                                                        </CardItem>
                                                                                                                      </Card>

                                                                                                                      <Card>
                                                                                                                                       <CardItem>
                                                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                                                        </CardItem>
                                                                                                                    <CardItem>
                                                                                                                                         <Body>
                                                                                                                                      <Text>
                                                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

                                                </Text>
                                                                                                                                 </Body>
                                                                                                                                        </CardItem>
                                                                                                                                      </Card>

                                                                                                                                      <Card>
                                                                                                                                                       <CardItem>
                                                                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                                                                        </CardItem>
                                                                                                                                    <CardItem>
                                                                                                                                                         <Body>
                                                                                                                                                      <Text>
                                                                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

                                                                </Text>
                                                                                                                                                 </Body>
                                                                                                                                                        </CardItem>
                                                                                                                                                      </Card>

                                                                                                                                                      <Card>
                                                                                                                                                                       <CardItem>
                                                                                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                                                                                        </CardItem>
                                                                                                                                                    <CardItem>
                                                                                                                                                                         <Body>
                                                                                                                                                                      <Text>
                                                                                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

                                                                                </Text>
                                                                                                                                                                 </Body>
                                                                                                                                                                        </CardItem>
                                                                                                                                                                      </Card>
                                                                                                                                                                      <Card>
                                                                                                                                                                                       <CardItem>
                                                                                                                                                                                <Thumbnail square size={80} source={require('../../../../images/poet.png')} />
                                                                                                                                                                                          <H2 style={{color :'#2196F3'}}>البحر الوافر، ووزنه:</H2>
                                                                                                                                                                        </CardItem>
                                                                                                                                                                    <CardItem>
                                                                                                                                                                                         <Body>
                                                                                                                                                                                      <Text>
                                                                                                                                                                                      مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ ** مُفَاعَلَتُنْ مُفَاعَلَتُنْ مُفَاعَلَتُنْ

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

PoemeBouhour= Animatable.createAnimatableComponent(PoemeBouhour);
export default connect(mapStateToProps, bindAction)(PoemeBouhour);
