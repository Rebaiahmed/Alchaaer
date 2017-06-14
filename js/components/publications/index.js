
import React, { Component } from 'react';
import { TouchableOpacity,Image  } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content,  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Right
,Tab, Tabs, List, ListItem,Footer, FooterTab } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import { CreatePage} from '../Create/';
import { ProfilePage} from '../profile/';
import  {  PublicationsPage} from '../publications/';


//µ************Import our Data******************//




class PublicationsLiked extends Component {



  constructor(props) {
     super(props);

     this.data = {
       status: {},
       user: null
     }
     this.state = {
       page: 'account'
     }
   }


  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }


//***************************//
componentWillMount() {
   const url = 'ws://192.168.1.5:3000/websocket';
   Meteor.connect(url);
const handle = Meteor.subscribe('poemes-list');
console.log("oj ok"+ JSON.stringify(Meteor.collection('poemes-list').find()));
 }


//***************Test methode insert*************
handleAddItem() {
  console.log('TODO: Handle Add Item');

var result = Meteor.call('Poemes.addOne', { title :"test test",author :"ahmed rebai",
nb_likes :0,nb_comments:0,dateCreation :(new Date()),content :"hello",
comments :[],liked_By :[]} ) ;
console.log("result"+ Meteor.call('Poemes.addOne'));


  Meteor.call('Poemes.addOne', { title :"test test",author :"ahmed rebai",
 nb_likes :0,nb_comments:0,dateCreation :(new Date()),content :"hello",
comments :[],liked_By :[]}, (err, res) => {
   // Do whatever you want with the response
   if(err)
   {
     console.log("error");
   }
   console.log('Poemes.addOne', err, res);
});
}



handleAddItemV2() {
  console.log("poemes are"+ Meteor.subscribe('items'));
  console.log("colelction poemes"+ Meteor.collection('poemes') );

}


//*************Defénir méthode pour récupere les données***********//
getMeteorData() {
       console.log("data poemss is" + Meteor.collection('poemes').find().length );
   return {

     poemes: Meteor.collection('poemes').find().length
   };
 }

  //****************************//





  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {

const { poemes } = this.data;
  const { props: { name, index, list } } = this;

    return (
      <Container>

      <Header>


            <Body>
              <Title>{(name) ? this.props.name : 'الاكثر اعجابا '}</Title>
            </Body>

            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon name="ios-menu" />
              </Button>
            </Right>
          </Header>




    <Content>
    <Card >
          <CardItem>
              <Left>
                  <Thumbnail source={logo} />
                  <Body>
                      <Text>القدس</Text>
                      <Text note>تميم البرغوثي </Text>
                  </Body>
              </Left>
            </CardItem>

            <CardItem content>
                <Text>
                مرَرْنا عَلى دارِ الحبيب فرَدَّنا عَنِ الدارِ قانونُ الأعادي وسورُها فَقُلْتُ لنفسي رُبما هِيَ نِعْمَةٌ فماذا تَرَى في القدسِ حينَ تَزُورُها تَرَى كُلَّ ما لا تستطيعُ احتِمالَهُ إذا ما بَدَتْ من جَانِبِ الدَّرْبِ دورُها وما كلُّ نفسٍ حينَ تَلْقَى حَبِيبَها تُسَرُّ ولا كُلُّ الغِيابِ يُضِيرُهاو
                </Text>


            </CardItem>


            <CardItem>
            <Button transparent info>
                                 <Text>المزيد </Text>
                             </Button>
            </CardItem>

            <CardItem>
                <Button transparent info>
                    <Icon active name="thumbs-up" />
                    <Text>12 إعجاب</Text>
                </Button>
                <Button transparent info>
                    <Icon active name="chatbubbles" />
                    <Text>4 تعليقات</Text>
                </Button>
                <Button transparent info>
                  <Icon active name="chatbubbles" />
                <Text>11h منذ</Text>
                </Button>
          </CardItem>
     </Card>

     <ListItem itemDivider>

                            </ListItem>

     <Card >
           <CardItem>
               <Left>
                   <Thumbnail source={logo} />
                   <Body>
                       <Text> يا خيول الهمة </Text>
                       <Text note>ـحـمـود الـخـضـر  </Text>
                   </Body>
               </Left>
             </CardItem>

             <CardItem content>
                 <Text>
                 نـشـودة خيـول الـهـمـة لـحـمـود الـخـضـر . يا خيــــول الهمة حلقي بلا جناح فخطانا ان سلكنا رحلة العمر كفاح كم لهاذا الدين اطلقنا قيودا و جماح انه الغيث اذا هبت اعاصير الرياح


                 </Text>


             </CardItem>


             <CardItem>
             <Button transparent info>
                                  <Text>المزيد </Text>
                              </Button>
             </CardItem>

             <CardItem>
                 <Button transparent info>
                     <Icon active name="thumbs-up" />
                     <Text>12 إعجاب</Text>
                 </Button>
                 <Button transparent info>
                     <Icon active name="chatbubbles" />
                     <Text>4 تعليقات</Text>
                 </Button>
                 <Button transparent info>
                   <Icon active name="chatbubbles" />
                 <Text>11h منذ</Text>
                 </Button>
           </CardItem>
      </Card>
    </Content>


    <Footer >
                 <FooterTab>
                 <Button  onPress={() => Actions.home()}>
                 <Icon name="apps" />
                     <Text> احدث الاشعار </Text>
                 </Button>
                 <Button active onPress={() => Actions.publications()}>
                 <Icon name="apps" />
                     <Text>الاكثر اعجابا </Text>
                 </Button>
                 <Button onPress={() => Actions.publications_commented()}>
                 <Icon name="apps" />
                     <Text> ألأكثر تعليقا </Text>
                 </Button>

                 </FooterTab>
             </Footer>


               </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(PublicationsLiked);
