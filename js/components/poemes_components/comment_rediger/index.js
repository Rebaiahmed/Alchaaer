
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Right,
List, ListItem,InputGroup, Input ,Picker,Badge,H3, Fab,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { openDrawer } from '../../../actions/drawer';
import styles from './styles';
import { Image} from 'react-native' ;
const background = require('../../../../images/poemes/defenition.jpg');
import * as Animatable from 'react-native-animatable';

class PoemeRedaction extends Component {



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
            <Title>{(name) ? this.props.name : 'كيف أتعلم اكتب شعر  '}</Title>
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
                                           fontWeight :'bold',textAlign:'center'}}> تعلم كتابة الشعر </Text>
</Body>

                                 </CardItem>
                                 <CardItem cardBody>
                                      <Image source={background} style={{width: 400, height: 400}}/>
                                 </CardItem>
  </Card>





  <Card>
                      <CardItem header>

                      </CardItem>
                      <CardItem>
                          <Body>
                              <Text>
                              إنّ الشعر من أهم علوم اللغة العربية الفصيحة، والذي يوليه الأدباء وعلماء اللغة إهتماماً بالغاً. فالشعر فن لا يتقنه الكثيرون، وهو موهبة ومنة من الله يهبها لمن يشاء. فكثير منّا يمتلك موهبة كتابة الشعر، لكن للشعر خضائص عديدة على من يريد كتابة الشعر أن يعرف الكثير من قواعد وضوابط كتابة الشعر، فكيف تكتب الشعر؟

                              </Text>
                          </Body>
                      </CardItem>

                 </Card>





                 <Card>
                                     <CardItem header>

                                     </CardItem>
                                     <CardItem>
                                         <Body>
                                        <Text>
                                        صحيح أن الشعر موهبة، لكن من يمتلك موهبة الكتابة أو التعبير لا يعني أنّه أصبح شاعراً. كما أنّ هذا لا يعني أن من لا يمتلك الموهبة لا يستطيع الكتابة أبداً، فالشعر يمكن تعلّم كتابته وليس بالشيء الصعب جداً. لكن من يمتهن مهنة الشعر ويبدع فيها لا بدّ أنّه استطاع أن يجمع بين الموهبة والعلم في آن واحد.

                                        </Text>
                                         </Body>
                                     </CardItem>

                                </Card>


                                <Card>
                                                    <CardItem header>

                                                    </CardItem>
                                                    <CardItem>
                                                        <Body>
                                                    <Text>
                                                    بداية لكتابة الشعر عليك أن تحدّد فكرة ما للتعبير عنها بطريقتك الخاصة، وأن تكون قادراً على وصف مشاعرك الخاصة أو العامة على شكل "منظومة معينة". فالشعر لا يقتصر على لغة معيّنة وهو موجودة في كلّ اللغات الموجودة في العالم، والشعر هو عبارة عن كلام مقفّى وموزون، يدلّ على معنى معين ويطرح فكرة ما، ويتكون من عدّة أبيات. والشعر مأخوذ من الشعور والإحساس، ولذلك فإنّه يقوم بشكل أساس على طرح المشاعر والأحاسيس.
</Text>
                                                        </Body>
                                                    </CardItem>

                                               </Card>


                                               <Card>
                                                                   <CardItem header>

                                                                   </CardItem>
                                                                   <CardItem>
                                                                       <Body>
                                <Text>
                                تكوّن الشعر العربي من عدّة أركان رئيسة وهي: القصيدة، والبيت، والقافية، والوزن، والبحر. أمّا القصيدة فهي تضمّ كل أبيات القصيدة كاملة، وتكون في مجملها تعبر عن الفكرة الرئيسة التي يطرحها الشاعر، وهي تشترك بنفس الوزن والقافية والبحر، وتتكوّن من عدّة أبيات. أمّا البيت الشعري فهو عبارة عن شطر أو سطر شعريّ قد يطرح فكرة فرعية في القصيدة. القافية في القصيدة هي التي نعبر عنها بأنّها الأحرف الأخيرة في البيت (أخر حرفين) وهي تكون مشتركة في أبيات القصيدة عادة. أمّا البحر فهو يعني الموسيقى الشعرية ونظام الإيقاع التي تقوم عليه القصيدة، والوزن فإنّه مجموعة التفعيلات التي تنتمي لبحر شعري معين ويكوّن نغماً موسيقياً واحداً.
                                </Text>
                                                                       </Body>
                                                                   </CardItem>

                                                              </Card>


                                                              <Card>
                                                                                  <CardItem header>

                                                                                  </CardItem>
                                                                                  <CardItem>
                                                                                      <Body>
                                                        <Text>
                                                        حتى تكون شاعراً لا تنسى أبداً أنّه عليك أن تمتلك ملكة اللغة، فإن قدرتك على التعبير لا تكون كافية إن لم تكن متمكناً من لغتك التي تعبّر عنها، كما لا تكون كافية إن لم تكن قادراً على الشطح بخيالك الذي يدفعك إلى رسم قصيدة شعرية من نسج خيالك وقوّة لغتك وتعبيرك عن المشهد الذي تريد. إن كنت تريد أن تصبح شاعراً مهمّاً لا تغفل أبداً أن تكون مطلعاً على أهم كتب الأدب ، وعلى أهم القصائد الشعرية في تاريخ اللغة العربية، فاقتني دواوين أبي الطيب المتنبي، ودواوين جرير، ودواوين شعراء المعلقات، ودواوين أحمد شوقي، وغيرهم الكثير من شعراء العصر الكلاسيكي القديم، وكذلك دواوين شعراء العصر الحديث كمحمود درويش، وإيليا أبو ماضي، وغيرهم الكثير ممن يعجبك أسلوبه
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


PoemeRedaction= Animatable.createAnimatableComponent(PoemeRedaction);
export default connect(mapStateToProps, bindAction)(PoemeRedaction);
