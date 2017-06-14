
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/defenition.jpg');
import * as Animatable from 'react-native-animatable';

class PoemeDefenitionPage extends Component {



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


//******************load Article*************//

loadArticle(article)
{




}

//*********************************//

loadArticleV2(article)
{



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
            <Title>{(name) ? this.props.name : 'تعريف الشعر العرب  '}</Title>
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
                                           fontWeight :'bold',textAlign:'center'}}> تعريف الشعر العربي </Text>
</Body>

                                 </CardItem>
                                 <CardItem cardBody>
                                      <Image source={background} style={{width: 400, height: 400}}/>
                                 </CardItem>
  </Card>


  <Card>


  <CardItem header>
      <Right>
  <Text style={{
  fontWeight :'bold',textAlign:'center'}}>الشعر </Text>
  </Right>
  </CardItem>


  <CardItem>
    <Body>
    <List>
                         <ListItem>
                             <Text>  
 </Text>   يعرف الشعر العربي <Text style={{fontWeight: "bold"}}>  
 
  على أنه كل شعر تم كتابته باللغة العربية، وهو من الفنون التي برع فيها العرب في التاريخ الأدبي، ويتم وصفه بأنه الكلام الموزون والمقفى، ويعود إلى العصور القديمة وبقي ممتداً إلى وقتنا الحاضر، ويتم من خلاله وصف حياة العرب وحالتهم وثقافاتهم وتاريخهم، ويشترط في الشعر العربي التزامه بالوزن والقافية.
                              </Text>
                         </ListItem>
                         <ListItem >
                             <Text>
ويعد                                                                                    </Text>     الوزن<Text style={{fontWeight: "bold"}}>
 شرطاً أساسياً من شروط صحة الشعر، وهذا الشرط ينطبق على جميع الأنواع الخاصة بالشعر؛ سواء الشعر القديم أو الحديث أو المعاصر، عدا قصيدة النثر فهي تصح بدون الالتزام به</Text>
                         </ListItem>

                         </List>
      </Body>
  </CardItem>
  </Card>









    <Card>


    <CardItem header>
        <Right>
  <Text style={{
  fontWeight :'bold',textAlign:'center'}}>مكونات الشعر </Text>
  </Right>
   </CardItem>


   <CardItem>
      <Body>
      <Text>
      هناك العديد من المكونات التي يتضمنها الشعر العربي وهي:
        </Text>
        <List>
                        <ListItem>
                            <Text>
 <Text style={{
  fontWeight :'bold'}}>مكونات الشعر </Text>

تعرف على أنها العديد من الأبيات الشعرية، والتي تشترك فيما بينها بالبحر، وتتفق في الحرف الأخير من كل بيت، ويتم كتابتها باللغة العربية الفصحى، ويجب أن تحتوي على ستة أبيات من الشعر كحد أدنى، وفي بعض الروايات التي رجحت صحة أن تكون سبعة أبيات على الأقل، وفي الحالات التي يتم كتابة قصيدة أقل من ذلك يطلق عليها قطعة.
                            </Text>
                        </ListItem>
                        <ListItem >
<Text style={{fontWeight: "bold"}}> القافية: </Text>
                            <Text> هي آخر كلمة في كل بيت شعري، وهي آخر ما ينطقه القارئ عند قراءته للبيت ويبقى معلقاً في ذهنه.</Text>
                        </ListItem>

                        <ListItem >
<Text style={{fontWeight: "bold"}}>    : البحر </Text>
                            <Text>البحر: هو الإيقاع المنظم للتفعيلات التي يتضمنها بيت الشعر، وتتميز بتكرارها في جميع الأبيات، وتم تعريفه بواسطة الشعر النبطي على أنه الطرق، أما الطاروق وهو اللحن عند أصحاب هؤلاء الشعر، ويتم إطلاقه بشكل تجاوزي على كامل البيت بالإضافة إلى البحر واللحن الخاص به.</Text>
                        </ListItem>

                        </List>
        </Body>
    </CardItem>
</Card>





                                 <Card>


                                 <CardItem header>
                                  <Right>
                               <Text style={{
                               fontWeight :'bold',textAlign:'left'}}>أنواع الشعر </Text>
                               </Right>
                                </CardItem>


                                <CardItem>

                                   <Body>
                                     <List>


                                     <ListItem >
                                   <Text>
<Text style={{fontWeight: "bold"}}>  :  الشعر العمودي </Text>
                                  يعد هذا النوع من أهم أنواع الشعر العربي، وهو الأساس والأصل للشعر العربي، ولجميع الأنواع التي أتت بعده، وأهم ما يميزه احتواؤه على العديد من الأبيات الشعرية المكونة من شطرين؛ يطلق على الشطر الأول الصدر والشطر الثاني العجز، ويتبع هذا النوع في كتاباته لجميع القواعد التي تعود لخليل أحمد الفراه، والتي يطلق عليها علم العروض، وهو العلم الذي يعنى بوزن وقافية الأبيات الشعرية، بحيث يكتسب الجزالة ويجعله محبب للسمع، بالإضافة إلى حفاظه على الأصالة.


                                     </Text>
                                     </ListItem>

     <ListItem >
<Text>
<Text style={{fontWeight: "bold"}}>  : الشعر الحر</Text>
 يختلف هذا النوع عن غيره، في أنه يعطي حرية مطلقة للشاعر بالتعبير عن نفسيته، وكل ما يتعلق بحياته من طموحات وآماله والقضايا المتعلقة به وغيرها من الأمور المتعلقة به، ووجدت العديد من العوامل التي أدت إلى ظهوره، وأهمها الرد على المدرسة الرومانسية، والتي تهتم بشكل أساسي في هروب الشخص من الواقع الذي يعيش فيه إلى الطبيعة وإلى عالم الخيال والمثالية، ومن أهم الشعراء الذين كتبوا بهذا النوع؛ بدر شاكر السياب ونازك الملائكة.
</Text>
   </ListItem>
 </List>



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


PoemeDefenitionPage= Animatable.createAnimatableComponent(PoemeDefenitionPage);

export default connect(mapStateToProps, bindAction)(PoemeDefenitionPage);
