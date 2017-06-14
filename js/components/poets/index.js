
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right,Card, CardItem, Text, Body,
List, ListItem,Thumbnail,InputGroup, Input ,Picker,Badge,H3, Fab,Item } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
var _ = require('underscore');


//import MOCKED_Poetes_DATA from './PoetesFake'
const background1 = require('../../../images/poetes/alhadith/alhadith.jpg');
const background2 = require('../../../images/poetes/alothmani/alothmani.jpg');
const background3 = require('../../../images/poetes/alandolsi/alanadalos.jpg');
const background4 = require('../../../images/poetes/alabassi/bg.jpeg');
const background5 = require('../../../images/poetes/aloumawi/aloumawi.jpg');
const background6 = require('../../../images/poetes/alislam/bg.jpg');
const background7 = require('../../../images/poetes/almoualkat/bg.jpg');


import * as Animatable from 'react-native-animatable';

class PoetsPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

//*******************************//
//*******************************//



  constructor(props) {
       super(props);
       /*list =_.where(MOCKED_Poetes_DATA,{id :1 } );
       console.log("List si"+ JSON.stringify( list[0].poetes ));
       this.state = {
           selectedItem: undefined,
           selected1: 'key0',
           results: {
               items: list[0].poetes
           },
           active: true
       }
     console.log("" + JSON.stringify(this.state.results.items));*/
   }


//***********************************//
//***********************************//



  componentWillMount() {
  }





  render() {
    const { props: { name, index, list } } = this;


    return (
      <Container style={styles.container}>

      <Header>


        <Body>
          <Title>{(name) ? this.props.name : 'اهم الشعراء العرب '}</Title>
        </Body>

        <Right>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Right>
      </Header>



        <Content padder>


<Card onPress={() => { Actions.PoetsAlhadithPage();  }}>
<CardItem>
 <Left>

<Body>
<Text onPress={() => { Actions.PoetsAlhadithPage();  }}> أعلام الشعر العربي الحديث </Text>
 <Text onPress={() => { Actions.PoetsAlhadithPage(); }} note>إقرأ المزيد </Text>
 </Body>
</Left>
 </CardItem>
<CardItem onPress={() => { Actions.PoetsAlhadithPage();  }} cardBody>
   <Image source={background1} />
 </CardItem>
 <CardItem content>
<Text onPress={() => { Actions.PoetsAlhadithPage();}}>يوجد العديد من الشعراء في العصر الحديث، الذين ساهموا مساهمةً كبيرةً في تطوير الشعر العربي، ومنهم </Text>
 </CardItem>

  </Card>


  <Card   onPress={() => { Actions.PoetsAlothmaniPage();  }}>
  <CardItem>
   <Left>

  <Body>
  <Text onPress={() => { Actions.PoetsAlothmaniPage();  }}>العصر العثماني  </Text>
   <Text onPress={() => { Actions.PoetsAlothmaniPage();  }} note>إقرأ المزيد </Text>
   </Body>
  </Left>
   </CardItem>
  <CardItem cardBody>
     <Image source={background2} />
   </CardItem>
   <CardItem content>
  <Text onPress={() => { Actions.PoetsAlothmaniPage();  }}>تراجع الأدب في الفترة العثمانية، فلم يكن هناك من يشّع الشّعراء أو الأدباء أو يعتبر اللغة العربيّة، وثمّ إغلاق ديوان الإنشاء، وسادت اللّغة التّركية والعامية واعتُبرت اللّغة الرّسمية للدّولة، فضعفت الكتابة الفنية، وزادت قيودها الفنيّة التي أضرّتها، وأصبحت ألفاظاً معنىً لها، وعجز الكتّاب عن الإتيان بأدب نابع من أعماق النّفس.</Text>
   </CardItem>

    </Card>




    <Card onPress={() => { Actions.PoetsAndolsiPage();  }} >
    <CardItem>
     <Left>

    <Body>
    <Text onPress={() => { Actions.PoetsAndolsiPage();  }}>العصر الأندلسي </Text>
     <Text onPress={() => { Actions.PoetsAndolsiPage();  }} note>إقرأ المزيد </Text>
     </Body>
    </Left>
     </CardItem>
    <CardItem cardBody>
       <Image source={background3} />
     </CardItem>
     <CardItem content>
     <Text onPress={() => { Actions.PoetsAndolsiPage();  }}>
     نظم الأندلسيون الشّعر في الأغراض التّقليدية العربيّة، كالغزل، والزّهد، والتّصوف، والمدح، والرّثاء، وتطوّر موضوع الرّثاء لديهم لينتقل من الأشخاص إلى رثاء المدن، وتأثّر الشّعر بأحداث العصر السّياسية، وتوسّع في وصف البيئة الأندلسيّة الخلّابة، واستحدثوا فنّ الموشّحات والأزجال.

     </Text>
     </CardItem>

     <CardItem content>
  <Text>
  كان الغزل من أبرز المواضيع التي يبدأ بها الشّعراء القصائد، ويود ذلك إلى حكم العادة الموروثة من القواعد الجاهليّة والتي امتدّت على طول العصور الزمنيّة المختلفة، ولكثرة السّبايا شاع التّغزل بالنّصرانيات، ودخلت العناصر النّصرانية على مفاهيم الشّعر،مثل الصّلبان والرّهبان، والنُّساك. وفي الجانب الآخر، ظهر شعراء الزّهد الذين دعوا إلى الانصراف عن الحياة بالتّصوف، مثل محيي الدّين بن عربي.
  </Text>
     </CardItem>

     <CardItem content>
<Text onPress={() => { Actions.PoetsAndolsiPage();  }}>
من أشهر شعراء هذا العصر بين الموشّحات والتّصوف، أبو البقاء الرُّندي، لسان الدّين بن عربي، ابن حزم الأندلسي، ابن زيدون، وابن خفاجة، وولّادة بنت المستكفي

</Text>
     </CardItem>


      </Card>



      <Card onPress={() => { Actions.PoetsAlabassiPage();  }} >
      <CardItem>
       <Left>

      <Body>
      <Text onPress={() => { Actions.PoetsAlabassiPage();  }}>العصر العبّاسي </Text>
       <Text onPress={() => { Actions.PoetsAlabassiPage();  }} note>إقرأ المزيد </Text>
       </Body>
      </Left>
       </CardItem>
      <CardItem cardBody>
         <Image source={background4} />
       </CardItem>
       <CardItem content>
  <Text onPress={() => { Actions.PoetsAlabassiPage();  }}>
  ازدهر الشّعر في هذا العصر وبلغ أقصى عظمته خاصّةً في العصر الهباسيّ الأول، فقد شجّع الخلفاء الشّعراء لنظم الشّعر بالعطايا والهبات، كما أن الاختلاط العرقيّ، وما نُقل من الأدب إلى العربيّة ساعد على دخول أساليب جديدة في الشّعر العربي، وفتح أذهان الشعراء على بوابات الإبداع في القول

</Text>
       </CardItem>


       <CardItem content>
<Text onPress={() => { Actions.PoetsAlabassiPage();  }}>
لعلّ من أشهر شعراء العصر العبّاسي هو المتنبّي، وأبو العلاء المعرّي، وأبو نواس، وأبو تمّام، وأبو فراس الحمداني، وبشّار بن برد، والأصمعي، والبحتريّ، وابن الرّومي، وابن الفارض
</Text>
       </CardItem>


        </Card>






              <Card onPress={() => { Actions.PoetsAlabassiPage();  }}>
              <CardItem>
               <Left>

              <Body>
              <Text>العصر الأموي </Text>
               <Text note>إقرأ المزيد </Text>
               </Body>
              </Left>
               </CardItem>
              <CardItem cardBody>
                 <Image source={background5} />
               </CardItem>
               <CardItem content>
          <Text>
          ازدهر الشّعر في العصر الأمويّ واتسعت آفاقه، وتحسّنت أساليبه تبعاً لحالة العصر ومظاهره السّياسية والقَبَليّة، فقد ظهرت في الخلافات و الأحزاب السّياسية والقبليّة والمذهبيّة، وقد خاض في هذه الأحداث الشّعراء، وتعصّب كلّ شاعر إلى فئته يدافع عنه وينشرون أفكاره ومفاهيمه، فظهر شعر الغزل العفيف، والغزل الفاضح، والشّعر السّياسي، وشعر المدح والهجاء، والمدح. اختلفت وجهات نظر كل حزب عن غيره، وعليه فقد انقسمت إلى أربعة أحزاب رئيسة: الحزب الأمويّ المناصر للدّولة، ولهم شعراؤهم وأُدباؤهم ، من أشهر هؤلاء الشّعراء الأخطل التّغلبي والفرزدق، وهم من عُرفوا باسم شعراء النّقائض. الحزب العلوي هو الحزب الثّاني الذين اتّهموا الأُموييّن اغتصاب الخلافة الإسلاميّة، ومن شعرائهم الكميت الأسدي. ثمّ الحزب الزّبيري، وهم أصحاب عبد الله بن الزّبير وأخيه مصعب بن الزبير، وهم يروا أنّ الخلافة يجب ان تُقتصر على قريش، ومن شعرائهم قيس بن عبد الله الرّقيات. أمّا آخر الأحزاب فهو الخوارج، وهم الذين خرجوا على علي بن أبي طالب بسبب قبوله الصّلح في (صِفِّين)، ورأووا أنّ الخلافة حقٌّ لجميع المسلمين، وأنّها تكون للأصلح بين الجميع، ومن شعرائهم قطري بن الفجاءة، والطّرماح.
           </Text>
               </CardItem>

                </Card>


                      <Card onPress={() => { Actions.PoetsIslamPage();  }}>
                      <CardItem>
                       <Left>

                      <Body>
                      <Text onPress={() => { Actions.PoetsIslamPage();  }}>عصر صدر الإسلام  </Text>
                       <Text note>إقرأ المزيد </Text>
                       </Body>
                      </Left>
                       </CardItem>
                      <CardItem cardBody>
                         <Image source={background6} />
                       </CardItem>
                       <CardItem content>
                    <Text onPress={() => { Actions.PoetsIslamPage();  }}>
                    هذه الفترة التي اشتملت عصر الرّسول عليه السّلام والخلفاء الرّاشدين، فعندما انتشر الإسلام في الجزيرة العربية، تعرّف العرب على رسالة جديدة لم يألفوها، ونجد أنّ مكانة الشّعر والشّعراء قد تراجعت خاصّةً بعد دخول الشّعراء الإسلامَ، وتطويعاً للشّعر من النّظام الإسلامي حاول الشّعراء نظم القصائد التي تتجلّى فيها الصّفات الإسلاميّة، إلّا أنهم تستّروا بالعباءة الجاهليّة، فخرج الشّعر جاهليّ البناء في معظمه حتّى بعد أن استمدّ المعاني الإسلاميّة. تعدّد الشّعراء في هذه الفترة بين الرّجال والنّساء، ومنهم شاعر الرّسول عليه السّلام حسّان بن ثابت، سكينة بنت الحسين، الخنساء، كعب بن زهير، ابن قيس الرّقيات، قيس بن الملوّح، المقنّع الكندي، وغيرهم
</Text>
                       </CardItem>

                        </Card>




                              <Card onPress={() => { Actions.PoetsAlajahiliPage();  }}>
                              <CardItem>
                               <Left>

                              <Body>
                              <Text onPress={() => { Actions.PoetsAlajahiliPage();  }}>العصر الجاهلي  </Text>
                               <Text onPress={() => { Actions.PoetsAlajahiliPage();  }} note>إقرأ المزيد </Text>
                               </Body>
                              </Left>
                               </CardItem>
                              <CardItem cardBody>
                                 <Image source={background7} />
                               </CardItem>
                               <CardItem content>
                              <Text onPress={() => { Actions.PoetsAlajahiliPage();  }}>أشهر الشّعراء الذين عُرفوا في العصر الجاهلي هم أصحاب المعلّقات، وهم امرؤ القيس، طرفة بن العبد، زهير بن أبي سُلمى، لبيد بن ربيعة، عمرو بن كلثوم، عنترة بن شدّاد، الحارث بن حلزة اليشكري، إلى جانب العديد من الشّعراء النّوابغ مثل أميّة بن الصّلت، والمُثقّب العبدي، والاعشى، وغيرهم، إضافةً إلى شعراء الصّعاليك.</Text>
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

PoetsPage= Animatable.createAnimatableComponent(PoetsPage);
export default connect(mapStateToProps, bindAction)(PoetsPage);
