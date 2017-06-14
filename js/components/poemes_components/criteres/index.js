
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,H2 ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/critere.jpg');
import * as Animatable from 'react-native-animatable';

class PoemeCriteres extends Component {



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
            <Title>{(name) ? this.props.name : 'خصائص الشعر العربي الحديث  '}</Title>
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
                             <H2>الشعر العربي الحديث   </H2>
                            </CardItem>
                         <CardItem>
                             <Body>
                                 <Text>
                                 يعرف أيضاً باسم الشعر المعاصر وشعر التفعلية، والذي بدأ يظهر وينتشر بين الشعراء العرب مع بداية الستينيات من القرن العشرين، مع اتصافه بصفات ومميّزات تختلف عن الشعر الذي سبقه، وقد سبق ذلك تغيّر تدريجي في شكل الشعر مع بدايات القرن العشرين، حيث أصبح يتحول من الشعر الغنائي إلى الشعر القصصي والمسرحي
                                 </Text>
                             </Body>
                         </CardItem>


                         <CardItem>
                             <Body>
                              <Text>
                              ظهرت القصص الشعرية والمسرحيات الشعرية على يد عدد من أبرز شعراء الحداثة، ومنهم الأخطل الصغير وخليل مطران، ثم تبع ذلك الخروج عن الأوزان الشعرية، وذلك كنتيجة طبيعيّة للعوامل الاجتماعية، والثقافية، والحاجة إلى تطوير القصائد العربية
                              </Text>
                             </Body>
                         </CardItem>

                    </Card>






      <Card>

      <CardItem header>
                            <H2>خصائص الشعر العربي الحديث </H2>
            </CardItem>
                       <CardItem>
                       <Right>
                <Thumbnail square size={80} source={require('../../../../images/quill.png')} />
</Right>
        </CardItem>
 <CardItem>
                         <Body>
                             <Text>
                             لا يتقيّد بأي نوع من القوانين، باستثناء بناء أبيات الشعر والقصائد على وزن التفاعيل، وكثير من القصائد الحديثة لا تتقيّد ببناء القوافي

                             </Text>
                 </Body>
                        </CardItem>


                        <CardItem>
                        <Right>
                 <Thumbnail square size={80} source={require('../../../../images/quill.png')} />
       </Right>
         </CardItem>
       <CardItem>
                          <Body>
                              <Text>
                              لا يتقيّد بأي نوع من القوانين، باستثناء بناء أبيات الشعر والقصائد على وزن التفاعيل، وكثير من القصائد الحديثة لا تتقيّد ببناء القوافي

                              </Text>
                  </Body>
                         </CardItem>




                         <CardItem>
                         <Right>
                  <Thumbnail square size={80} source={require('../../../../images/quill.png')} />
  </Right>
          </CardItem>
   <CardItem>
                           <Body>
                               <Text>
                               لا يتقيّد بأي نوع من القوانين، باستثناء بناء أبيات الشعر والقصائد على وزن التفاعيل، وكثير من القصائد الحديثة لا تتقيّد ببناء القوافي

                               </Text>
                   </Body>
                          </CardItem>



                          <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/quill.png')} />
   </Right>
           </CardItem>
    <CardItem>
                            <Body>
                                <Text>
                                لا يتقيّد بأي نوع من القوانين، باستثناء بناء أبيات الشعر والقصائد على وزن التفاعيل، وكثير من القصائد الحديثة لا تتقيّد ببناء القوافي

                                </Text>
                    </Body>
                           </CardItem>



                           <CardItem>
                           <Right>
                    <Thumbnail square size={80} source={require('../../../../images/quill.png')} />
    </Right>
            </CardItem>
     <CardItem>
                             <Body>
                                 <Text>
                                 لا يتقيّد بأي نوع من القوانين، باستثناء بناء أبيات الشعر والقصائد على وزن التفاعيل، وكثير من القصائد الحديثة لا تتقيّد ببناء القوافي

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


PoemeCriteres= Animatable.createAnimatableComponent(PoemeCriteres);

export default connect(mapStateToProps, bindAction)(PoemeCriteres);
