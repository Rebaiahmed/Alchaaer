
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container,Content, Header, Title, Form, Item, Input,Label,Button,Left,Right
,Card, CardItem,Footer, FooterTab, Text,Body,Badge } from 'native-base';


import Icon from 'react-native-vector-icons/MaterialIcons';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
var Dimensions = require('Dimensions');
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';





class ProfilePage extends Component {



  constructor(props) {
    super(props);
    this.state ={User : null,date_brith: new Date(),
    initialPosition: 'unknown',
     lastPosition: 'unknown',
     countryName: '',
        regionName: ''}
     ;


  }



 watchID: ?number = null;





//*************************************//
componentDidMount() {

  AsyncStorage.getItem("userId").then((value) => {


  this.determineUser(value);

  }).done();




//***********get the currentPosition***************//
 navigator.geolocation.getCurrentPosition(
    (position) => { var initialPosition = JSON.stringify(position);
      this.setState({initialPosition}); },
      (error) => alert(JSON.stringify(error)),
       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000} );
        this.watchID = navigator.geolocation.watchPosition((position) =>
         { var lastPosition = JSON.stringify(position);
           this.setState({lastPosition}); });



//*************************************************//
//*************************************************//
var url = 'https://freegeoip.net/json/';
   fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
       console.log(responseJson);
       this.setState({
         countryName: responseJson.country_name,
         regionName: responseJson.region_name
       });
     })
     .catch((error) => {
      //console.error(error);
     });

}




//**********function to fetch User**********//


determineUser(id :string)
{


console.log("the id"+ id);
  fetch('http://192.168.1.3:4040/api/users/'+ id + '', {
     method: 'GET',
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

   })
   .then((response) => response.json())
   .then((responseData) => {
  console.log("responseData" + JSON.stringify(responseData));
  this.setState({User : responseData});


   }).catch((error) =>
       {
             /*this.setState({
               loading: false,
               myCondition : false
             });*/

             console.log("error" + JSON.stringify(error));

   });


}


//***************function on click to update Profile*************

UpdateProfile()
{
  fetch('http://192.168.1.3:4040/api/publications',{


    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: this.state.email,
      date_brith : this.state.date_brith,
      location : this.state.location,
      countryName : this.state.countryName,
      regionName : this.state.regionName,
      initialPosition : this.state.initialPosition


    })
  })

   .then((response) => response.json())
   .then((responseJson) => {
      console.log("responseJosn"+ JSON.stringify(responseJson));

      this.setState({
         User : responseJson.poemes
      })


     })
    .catch((error) => {
      console.error(error);
      });

}




//************************//
 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID);

 }




  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {

    const { props: { name, index, list } } = this;
    const {width, heigth} = Dimensions.get('window');
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'غير بروفيلك'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>

        <Card>
        <Form>
              <Item>
                  <Input placeholder="Username" />
              </Item>

              <Item>
                  <Input placeholder="Email" />
              </Item>

              <Item>
                  <Input placeholder="location" />
              </Item>

              <Item>
                  <Input placeholder="Date naissance" />
              </Item>

              <Item>
              <Calendar
onChange={(date) => this.setState({date})}
selected={this.state.date}
// We use Moment.js to give the minimum and maximum dates.
minDate={Moment().startOf('day')}
maxDate={Moment().add(10, 'years').startOf('day')}
/>
              </Item>

              <InputGroup rounded borderType='regular'>
              <Input style={{
                  width: 200, height: 200
              }}  multiline={true} placeholder= 'Bio'
              onChangeText={(content) => this.setState({content})}/>
          </InputGroup>

          <Button rounded info>
              <Text>Update Profile</Text>
                    </Button>

          </Form>
                   </Card>


        </Content>


        <Footer >
                            <FooterTab>
                                <Button badge vertical>

                                    <Icon name="person" />
                                    <Text>الملف الشخصي </Text>
                                </Button>
                                <Button>
                                    <Icon name="camera" />
                                    <Text>منشوراتي</Text>
                                </Button>
                                <Button active badge vertical>
                                    <Badge ><Text>51</Text></Badge>
                                    <Icon active name="navigate" />
                                    <Text>رسائل</Text>
                                </Button>
                                <Button>
                                    <Icon name="notifications-none" />
                                    <Text>التنبيهات </Text>
                                </Button>
                            </FooterTab>
                        </Footer>









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


export default connect(null, bindAction)(ProfilePage);
