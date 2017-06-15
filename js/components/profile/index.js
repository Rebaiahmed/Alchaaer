
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container,Content, Header, Title, Form, Item, Input,Label,Button,Left,Right
,Card, CardItem,Footer, FooterTab, Text,Body,Badge,InputGroup,
View, List, ListItem } from 'native-base';
import { StaticContainer,ScrollView } from 'react-native' ;

import Icon from 'react-native-vector-icons/FontAwesome';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
var Dimensions = require('Dimensions');
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

import Tabs from 'react-native-tabs';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FacebookTabBar';


class ProfilePage extends Component {



  constructor(props) {
    super(props);
    this.state ={User : null,date_brith: new Date(),
    initialPosition: 'unknown',
     lastPosition: 'unknown',
     countryName: '',
        regionName: '',
      page:'second'}
     ;


  }



 watchID: ?number = null;





//*************************************//
componentDidMount() {






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


      <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <FacebookTabBar />}
      >
          <ScrollView tabLabel="md-home" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Mon Profile </Text>

              <Card>
                      <CardItem header>
                          <Text>NativeBase</Text>
                      </CardItem>
                      <CardItem>
                          <Body>
                              <Text>
                                hi hi
                              </Text>
                          </Body>
                      </CardItem>
                      <CardItem header>
                          <Text>GeekyAnts</Text>
                      </CardItem>
                 </Card>
            </View>
          </ScrollView>
          <ScrollView tabLabel="md-create" style={styles.tabView}>
            <View style={styles.card}>
              <Text>manchourati </Text>
              <List>
                     <ListItem >
                         <Text>Simon Mignolet</Text>
                     </ListItem>
                     <ListItem>
                         <Text>Nathaniel Clyne</Text>
                     </ListItem>
                     <ListItem>
                         <Text>Dejan Lovren</Text>
                     </ListItem>
                 </List>
            </View>
          </ScrollView>
          <ScrollView tabLabel="md-bookmark" style={styles.tabView}>
            <View style={styles.card}>
              <Text>almoufadhala</Text>

              <List>
                     <ListItem >
                         <Text>Simon Mignolet</Text>
                     </ListItem>
                     <ListItem>
                         <Text>Nathaniel Clyne</Text>
                     </ListItem>
                     <ListItem>
                         <Text>Dejan Lovren</Text>
                     </ListItem>
                 </List>
            </View>
          </ScrollView>
          <ScrollView tabLabel="md-notifications" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>

          <ScrollView tabLabel="md-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messages </Text>
            </View>
          </ScrollView>

          <ScrollView tabLabel="md-exit" style={styles.tabView}>
            <View style={styles.card}>
              <Text>exit from here </Text>
            </View>
          </ScrollView>

    </ScrollableTabView>









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
