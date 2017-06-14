
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Image} from 'react-native' ;
import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
const background = require('../../../../images/poemes/image.jpg');
import * as Animatable from 'react-native-animatable';



class PoemeImportance extends Component {



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
            <Title>{(name) ? this.props.name : 'أهمية الشعر'}</Title>
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
                                           fontWeight :'bold',textAlign:'center'}}> أهميّة الشعر العربي
                                           </Text>
    </Body>

                                 </CardItem>
                                 <CardItem cardBody>
                                      <Image source={background} style={{width: 400, height: 400}}/>
                                 </CardItem>
    </Card>


    <Card>


<CardItem>
<Text>إذا أمعنّا النظر في تاريخ الأدب عامة والشعر خاصة، نجد أن هناك أهميّة كبيرة للشعر باختلاف الوقت والمكان، إلا أنّها تتشابه على مرّ العصور في أمور عدّة، أهمّها

</Text>
</CardItem>


    <CardItem header>
      <Right>
    <Text style={{
    fontWeight :'bold',textAlign:'center'}}>الدفاع عن القبيلة </Text>
    </Right>
    </CardItem>


    <CardItem>
    <Body>
    <List>
                         <ListItem>
                        <Text>
                        من أبرز وظائف الشعر العربي هو الدفاع عن القبيلة، لأن الشاعر بقصائده يحمي عن قبيلته، ويدافع عن سمعتها، فهو رجل الصحافة بالنسبة لها، الذي يظهر محاسنها ويهجو أعداءها، ويدافع عن سياستها ويُمجّدها. وقد صوّر أبو عمرو بن العلاء فرط حاجة العرب إلى الشعر قائلاً: ( الذي يُقيّد عليهم مآثرهم، ويُفخّم شأنهم، ويُهوّل على عدوّهم ومن غزاهم، ويُهيب من فرسانهم، ويُخوّف من كثرة عددهم، ويهابهم، شاعر غيرهم، فيراقب غيرهم
                        </Text>
                         </ListItem>

          <ListItem>
          <Text>
          والواقع أن الشاعر الجاهلي شخص له منزلته التي تفوق منزلة البشر عموماً، أو يمكننا القوا إنّه نبّي قبيلته وزعيمها في السّلم، وبطلها في الحرب، إذ إنّ وظيفته الأساسية والطبيعية أن يكون لسان عشيرته، يحمي عِرض قبيلته، ويُخلّد بلادهم، ويُشارك في المعارك رامياً العدو بسهام شعريّة لها قوة خارقة، يتغنّى بأمجادها، وأيّامها، ويحمي شرف الدم والعرق، فهو مرآة تنعكس عليها الصّورة المثاليّة للقبيلة. ولما جاء الإسلام انطفأت نار العصبيّة القبليّة، فانتقلت من حماية القبيلة إلى حمياة الدين، فاستخدم الشاعر مواهبه لحماية دينه ومبادئه.
          </Text>
          </ListItem>

                         </List>
      </Body>
    </CardItem>
    </Card>









    <Card>


    <CardItem header>
        <Right>
    <Text style={{
    fontWeight :'bold',textAlign:'center'}}>الشعر ديوان العرب </Text>
    </Right>
    </CardItem>


    <CardItem>
      <Body>

        <List>
                        <ListItem>
                          <Text>

                          من المعروف أن الشعر يعتبر خلاصة صافية للتجارب الإنسانية، ومصدراً لتدوين معارفهم المختلفة، وتنطبق هذه الحالة على الشعر العربي، فنجد فيه من الحكمة والمعرفة ما يكفي لتثبيت هذه الفكرة، ولهذا كَثُر استخدام مصطلع (الشعر ديوان العرب) من قِبَل النُّقاد

                          </Text>
                        </ListItem>
                <ListItem>
<Text>عُرف لفظ الديوان عند العرب بدلالته المشتركة بين التحليل التسجيل، وقد أحسّ النقاد العرب بالقيمة المعرفية للشعر العربي منذ وقت مبكر جداً، فنجد أنّ عمر بن الخطاب رضي االله عنه جعل الشّعر أصحّ علم عَرَفته العرب، يقول: (كان الشعر علم قوم لم يكن لهم علم أصح منه). ولأنّ الشعر ديوان العرب التراثي، ومادة تاريخهم، وسِجِلّ حياتهم، تجد حرص العرب على حفظ أشعارها لتأخذ العبرة منها، وتُوثّق العلاقة بين حاضرها وماضيها، ولتكون مَعلَماً وهادياً للأجيال القادمة، يتعلمون منها الأخلاق والشرف.

</Text>
                </ListItem>


                        </List>
        </Body>
    </CardItem>
    </Card>





                                 <Card>


                                 <CardItem header>
                                  <Right>
                               <Text style={{
                               fontWeight :'bold',textAlign:'left'}}>الحكمة </Text>
                               </Right>
                                </CardItem>


                                <CardItem>

                                   <Body>
                                     <List>


                                     <ListItem >


                              <Text>
                              عتر النقّاد الشعر العربي مصدر حكمة وتربية وتهذيب، إذ كان الشاعر يُربّي قومه على الفضيلة، والأخلاق الحميدة، ويزجرهم في الوقت نفسه عن الأفعال الدنيئة؛ فيُقبح البخل ويُشجّع على السخاء، ويُسفّه الجبن ويشدو بالجود، فتشبّ النّفس على الفضيلة، وتسمو في مدارج الرفعة والخير.

</Text>
</ListItem>

     <ListItem >
<Text>
والشعراء في ذلك الوقت كانوا يقومون بدور الأساتذة والمُصلحين، يُرشدون الناس بشِعرهم إلى مكارم الأخلاق. وعليه، قال العلويّ: (إنّ الشعراء يحضّون على الأفعال الأفعال الجميلة، وينهون عن الخلائق الذميمة، فسنّوا سبيل المكارم لطلّابهم، ودلّوا بناة المحامد على أبوابها)، ولارتباط الشعر بالحكمة، فإن الشاعر الذي لا يأتي بالحكمة في شعره لا يُعدّ فحلاً.

</Text>
    </ListItem>
    </List>



                                     </Body>
                                 </CardItem>
    </Card>





                                     <Card>


                                     <CardItem header>
                                      <Right>
                                   <Text style={{
                                   fontWeight :'bold',textAlign:'left'}}>الشعر مفتاح لفهم القرآن والسُّنة
                                    </Text>
                                   </Right>
                                    </CardItem>


                                    <CardItem>

                                       <Body>
                                         <List>


                                         <ListItem >
                                  <Text>
                                  وبسبب هذه الغاية التعليمية نجد ابن عبّاس يهتّم اهتماماً بالغاً بالشعر، ويستمع إلى كلام الشعراء بكل جَديّة، ومضى كثير من النقاد العرب على آثاره يؤكّدون هذه الوظيفة التعليمية للشعر. فقد صرّح أبو زيد القرشي في مقدمة (الجمهرة) أنّ من وظائف الشعر العربي اتّخاذ بعض الشواهد منه على معاني القرآن والحديث، وعليه، فإنّ الشعر شاهد وذريعة إلى فهم الدين والسّنة. ولذا جعل علماء علوم القرآن والتفسير معرفة الشعر الجاهلي شرطاً أساسيّاً من شروط المُفسّر والمفتي. قال الإمام الشافعي: (لا يحلّ لأحد أن يفتي في دين الله إلا رجلاً عارفاً بكتاب الله، بناسخه ومنسوخه، وبمحكمه ومتشابهه، ثم يكون بعد ذلك بصيراً بحديث رسول الله صلى الله عليه وسلم، ويكون بصيراً باللغة، وبصيراً بالشعر)
                                  </Text>
                                         </ListItem>

        </List>



                                         </Body>
                                     </CardItem>
        </Card>






                                         <Card>


                                         <CardItem header>
                                          <Right>
                                       <Text style={{
                                       fontWeight :'bold',textAlign:'left'}}>التهذيب والتربية
                                        </Text>
                                       </Right>
                                        </CardItem>


                                        <CardItem>

                                           <Body>
                                             <List>


                                             <ListItem >
                                      <Text>
                                      صرّح الخلفاء الراشدون، وعلماء الدولة الكبار، والنُّقاد الأدبيون دور الشعر في إصلاح النفس، وتهذيب السلوك، واستثارة المشاعر الإنسانية، والأحساسيس النبيلة، كما أنّ له الفضل في الابتعاد عن الأفعال الخسيسة، والخصال السيّئة، مما يجعل منه مادة تربوية تعليمية هامة. قال أبو بكر الصديق رضي الله عنه: (علموا أولادكم الشعر، فإنه يُعلّمهم مكارم الأخلاق)، وقال عمر بن الخطاب رضي الله عنه: (تحفّظوا الأشعار، وطالعوا الأخبار، فإن الشعر يدعو إلى مكارم الأخلاق، ويُعلّم محاسن الأعمال، ويبعث على جليل الفعال، ويفتق الفطنة، ويشحذ القريحة، وينهى عن الأخلاق الدنيئة، ويزجر عن مواقعة الريب، ويحضّ على معالي الرتب)، وقال معاوية بن أبي سفيان رضي االله عنهما: (يجب على الرجل تأديب ولده، والشعر أعلى مراتب الأدب).

                                      </Text>
                                             </ListItem>


            </List>



                                             </Body>
                                         </CardItem>
            </Card>





                                             <Card>


                                             <CardItem header>
                                              <Right>
                                           <Text style={{
                                           fontWeight :'bold',textAlign:'left'}}>الأهميّة النفسيّة </Text>
                                           </Right>
                                            </CardItem>


                                            <CardItem>

                                               <Body>
                                                 <List>


                                                 <ListItem >
                                               <Text>
                                               ربط النّقاد العرب الذين تغلب نزعتهم الفلسفية والعقلية على الشعر بالغايات الخلقية، مثل: الفارابي، وابن سينا، وابن رشد، ومَسكوَيه، وحازم القرطاجني، وغيرهم، نجدهم قد تحدّثوا كثيراً عن تأثير الشعر، وامتداد سلطانه، وصرّحوا بأنّ فيه من التأثير ما يشبه السّحر؛ لأنه فن ممتع لذيذ، يمتلك قِيَماً جمالية متميزة، وتراحم قد صرّحوا أيضاً بأنّه يثير في النفس المشاعر النبيلة، فيحملها على الطرب، ويُنفّرها من الرذيلة، ثم يتعدي الأمر ليتحوّل هذا الشعرو النفسي إلى سلوك عملي ومواقف فعليّة، ولذا، قال عمر بن الخطاب رضي االله عنه: (نِعم الهديّة للرجل الشريف الأبيات يقدمها بين يدي الحاجة، يستعطف بها الكريم، ويستنزل بها اللئيم).
                                               </Text>
                                                 </ListItem>


                </List>



                                                 </Body>
                                             </CardItem>
                </Card>





                                                 <Card>


                                                 <CardItem header>
                                                  <Right>
                                               <Text style={{
                                               fontWeight :'bold',textAlign:'left'}}>الشعر قالب اللغة </Text>
                                               </Right>
                                                </CardItem>


                                                <CardItem>

                                                   <Body>
                                                     <List>


                                                     <ListItem >
                                              <Text>
                                              أشار النقاد القدامى بوضوح إلى دور الشعر في حفظ اللغة وإثرائها، إذ إنّ الشّعر وعاء اللغة ومستودعها، ولذا، فهو مادة أساسية في تعليم اللغة، وتنمية المَلَكة البلاغية، وتفصيح اللسان. سأل معاوية رضي االله عنه الحارث بن نوفل: (ما علّمت ابنك؟)، قال: (القرآن والفرائض) فقال: (روّه فن فصيح الشعر، فإنه يُفتّح المنطق، ويطلق اللسان، ويدل على المروءة والشجاعة)
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




PoemeImportance= Animatable.createAnimatableComponent(PoemeImportance);
export default connect(mapStateToProps, bindAction)(PoemeImportance);
