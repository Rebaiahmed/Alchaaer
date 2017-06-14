
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,H2,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/smile.jpg');
import * as Animatable from 'react-native-animatable';
class PoemeModhhaka extends Component {



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
            <Title>{(name) ? this.props.name : 'ابيات شعر مضحكه '}</Title>
</Animatable.Text>
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
                                   <H2 style={{textAlign:'center' }}>الشعر العربي </H2>
                               </CardItem>
                               <CardItem>
                                   <Body>
                                       <Text>
                                       للشعر العربي مجالات كثيرة فقد ناقش معظم قضايا المجتمع بين طيّاته، لكن ما لم يكن متعارفاً عليه الشعر بهدف الإضحاك، ومنذ مدة انتشر انتشاراً كبيراً، وهو أقرب للخواطر النثرية من أن يكون شعراً، ولا أقلل من أهميته، فنحن بحاجة ما يضحكنا في هذا الزمان
                                       </Text>
                                   </Body>
                               </CardItem>

                          </Card>




                          <Card>

                      <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/lantern.png')} />
                    </Right>
                   </CardItem>

                    <CardItem>
                            <Body>
                           <Text>
                           رأى الصيف مكتوباً على باب داره فحرفه ضيفاً فقام إلى السيــف فقلنا له خيراً فظن بأننا نقول له خبزاً فمات من الخوف


                         </Text>
                          </Body>
                     </CardItem>


                  </Card>






 <Card>

 <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/lantern.png')} />
                    </Right>
                   </CardItem>

   <CardItem>
                            <Body>
                           <Text>
                           كان لبعضهمْ حمارٌ وجملْ نالهما يوماً من الرقّ مللْ فانتظرَا بَشائِرَ الظَّلماءِ وانطَلقا معاً إلى البَيْداءِ يجتليان طلعة َ الحريَّهْ وينشقانِ ريحها الزكيَّهْ فاتفقا أن يقضيا العمرَ بها وارتضَيا بمائِها وعُشبِها وبعدَ ليلة ٍ من المسيرِ التفت الحِمارُ لِلبعيرِ وقال: كربٌ يا أَخي عظيمُ فقفْ، فمشي كلَّهُ عقيمُ! فقال: سَلْ فِداكَ أُمِّي وأَبي عسى تَنالُ بي جليلَ المطلبِ قال: انطلقْ معي لإدراكِ المُنى أَو انتظِر صاحبَكَ الحرَّ هنا لابدّ لي من عودة للبلد لأَنني تركتُ فيه مِقوَدِي! فقال سر والزَمْ أَخاك الوتِدا فإنما خُلِقْتَ كي تُقيَّدا



                         </Text>
                          </Body>
                     </CardItem>

 </Card>


 <Card>

 <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/lantern.png')} />
                    </Right>
                   </CardItem>


                   <CardItem>
                            <Body>
                           <Text>
                          قد كان في فحص شعري كُرّ وجحش وعـير لـو أن شعـري شعـير لاستطيبتـه الحمير لكن شعري شعــــور هل للحمير شعور؟


                         </Text>
                          </Body>
                     </CardItem>
 </Card>







<Card>

 <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/lantern.png')} />
                    </Right>
                   </CardItem>

   <CardItem>
                            <Body>
                           <Text>
                          يُرْغِي ويُزْبِدُ بالقَافَاتِ تَحْسبُها قصفَ المدافعِ في أفقِ البساتينِ منْ كلِّ قافٍ كأن اللهَ صوَّرها من مارجِ النارِ تصويرَ الشياطينِ قد خصَّه اللهُ بالقافاتِ يعلُكها واختَصَّ سُبحانَه بالكافِ والنُّونِ يَغيبُ عَنّا الحجا حِيناً ويحْضُرُه حيناً فيخلطُ مختلاًّ بموزونِ لا يأمَنُ السامعُ المسكينُ وثْبَتَه مِن كردفان إلى أعلى فِلَسطِينِ بَيْنَا تراه ينادي الناسَ في حَلَبٍ إذا به يَتَحَدَّى القَومَ في الصِّينِ ولم يكن ذاكَ عن طَيشٍ ولا خَبَلٍ لكنّها عَبقَرِيّاتُ الأساطينِ يَبيتُ يَنسُجُ أحلاماً مُذَهَّبَة ً تُغني تفاسيرُها عن ابنِ سِيرِينِ



                         </Text>
                          </Body>
                     </CardItem>
 </Card>





  <Card>
                               <CardItem header>
                                   <H2 style={{textAlign :'center' }}> نوادر شعرية</H2>
                               </CardItem>
 </Card>


              


<Card>

             <CardItem>
                          <Right>
                   <Thumbnail square size={80} source={require('../../../../images/arabic-lantern.png')} />
                    </Right>
                   </CardItem>

<CardItem>
<H3 style={{textAlign :'right' }}>النادرة الأولى </H3>
 </CardItem>

<CardItem>
<Body>
<Text>
                                     حكى الأصمعي قال: ضَلّت لي إبل فخرجت في طلبها، وكان البرد شديداً فالتجأت إلى حيّ من أحياء العرب، وإذا بجماعة يُصلّون وبقربهم شيخ مُلتفّ بكساء وهو يرتعد من البرد وينشد: أيا رب إن البرد أصبح كالحا وأنت بحالي يا إلهي أعلم فإن كنت يوماً في جهنم مدخلي ففي مثل هذا اليوم طابت جهنم قال الأصمعي: فتعجّبت من فصاحته وقلت: يا شيخ! أما يستحي تقطع الصلاة وأنت شيخ كبير؟ فأنشد يقول: أيطمع ربّي في أن أصلي عاريا ويكسو غيري كسوة البرد والحر فوالله لا صلّيت ما عشت عاريا عشاء ولا وقت المغيب ولا الوتر ولا الصبح إلا يوم شمس دفيئة وإن غممت فالويل للظهر والعصر وإن يكسني ربي قميصاً وجبة أصلّي له مهما أعيش من العمر قال فأعجبني شعره وفصاحته، فنزعت قميصاً وجبّة كانا عليّ ودفعتهما إليه، وقلت له: البسهما وقم فاستقبل القبلة وصلّي جالساً، فجعل يقول: إليك اعتذاري من صلاتي جالسا على غير ظهر مومياً نحو قبلتي فمالي ببرد الماء يارب طاقة ورجلاي لا تقوى على ثني ركبتي ولكنني استغفر الله شاتياً وأقضيكها يارب في وجه صيفتي وإن أنا لم أفعل فأنت محكم بما شئت من صفعي ومن نتف لحيتي قال فعجبت من فصاحته وضحكت عليه وانصرفت


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

PoemeModhhaka= Animatable.createAnimatableComponent(PoemeModhhaka);
export default connect(mapStateToProps, bindAction)(PoemeModhhaka);
