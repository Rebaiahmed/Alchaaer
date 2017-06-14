
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, variables, Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { Router, Scene } from 'react-native-router-flux';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { closeDrawer } from './actions/drawer';

import * as Animatable from 'react-native-animatable';




import Login from './components/login/';
import Register from './components/Register/';

import AboutPage from './components/AboutApp/';
import ContactPage from './components/Contact/';
import CreatePage from './components/Create/';
import PoemesPage from './components/Poems/';
import PoetsPage from './components/poets/';
import ProfilePage from './components/profile/';



import  PublicationsLiked from './components/publications/';
import PublicationsCommented from './components/publications_most_commented';


import FavorisPage from './components/favoris/'
import UserGuidePage from './components/userGuide'
import Home from './components/home/';
import BlankPage from './components/blankPage';
import SideBar from './components/sideBar';
import CommentsPage from './components/comments';
import PoemeDetailsPage from './components/poeme_details';

//************************************//
//************************************//

import PoemeDefenitionPage from './components/poemes_components/defenition_poeme' ;
import PoemeImportance from  './components/poemes_components/importance_poeme';
import PoemeRedaction from  './components/poemes_components/comment_rediger';
import PoemeEtapes from  './components/poemes_components/les_etapes';
import PoemeCriteres from  './components/poemes_components/criteres';
import PoemeBouhour from  './components/poemes_components/albouhour';
import PoemeAjaeb from  './components/poemes_components/ajaeb';
import PoemeModhhaka from  './components/poemes_components/abyet_modhhaka';



import PoetsAlajahiliPage from './components/poets/aljahili' ;
import PoetsAndolsiPage from './components/poets/alandolsi' ;
import  PoetsAlabassiPage from './components/poets/alabassi' ;
import PoetsIslamPage from './components/poets/alislam' ;
import PoetsAlothmaniPage from './components/poets/alothmani' ;
import PoetsAloumawiPage from './components/poets/aloumawi' ;
import PoetsAlhadithPage from './components/poets/hadith' ;


//**************animate our components

import MessagesPage  from './components/messages';
import ModifyProfilePage from './components/modify_profile';
import NotificationsPage from './components/notifications'
import MyPublicationsPage from './components/mes_poetes';
import FollowingPage  from './components/following';
import FollowerssPage   from './components/followers';
import { statusBarColor } from './themes/base-theme';

//**************appliquer animation *********//

const {
  popRoute,
} = actions;

const RouterWithRedux = connect()(Router);

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {



  constructor(props) {
    super(props);
    this.state = {
  authUser : false
    }


}
  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    themeState: React.PropTypes.string,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
this._loadInitialState();
//console.log("auth user" + this.state.authUser);
    console.log("statusBarColor"+ statusBarColor);
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }





//********************//
_loadInitialState = async () => {
   try { var value = await AsyncStorage.getItem("userId");
   //console.log("value App navigator"+ value);
      if (value !== null){
        this.setState({authUser :true});

      } else {

         //console.log("no value sidebar authUser")
         }
        } catch (error) {
   console.log('AsyncStorage error: ' + error.message);
  }
};







  render() {
    const authUser = this.state.authUser
    console.log("authUser" + authUser);
    return (

      <Drawer
   ref={(ref) => { this._drawer = ref; }}
   type="overlay"
   tweenDuration={150}
   content={<SideBar />}
   tapToClose
   acceptPan={false}
   onClose={() => this.closeDrawer()}
   openDrawerOffset={0.2}
   panCloseMask={0.2}
   side={'right'}
   styles={{
     drawer: {
       shadowColor: '#000000',
       shadowOpacity: 0.8,
       shadowRadius: 3,
     },
   }}
   tweenHandler={(ratio) => {  //eslint-disable-line
     return {
       drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
       main: {
         opacity: (2 - ratio) / 2,
       },
     };
   }}
   negotiatePan
 >
   <StatusBar
     backgroundColor={statusBarColor}
     barStyle="default"
   />
   <RouterWithRedux>
     <Scene key="root">
       <Scene key="login" component={Login} hideNavBar initial={!authUser}  />
         <Scene key="register" component={Register}  />
       <Scene key="home" component={Home} initial={authUser}  />
       <Scene key="blankPage" component={BlankPage} />
        <Scene key="Profile" component={ProfilePage} />
        <Scene key="Messages" component={MessagesPage} />
        <Scene key="ModifyProfile" component={ModifyProfilePage} />
        <Scene key="Notifications" component={NotificationsPage} />
        <Scene key="my_Publications" component={MyPublicationsPage} />
        <Scene key="Followers" component={FollowerssPage} />
        <Scene key="Following" component={FollowingPage} />
         <Scene key="Create" component={CreatePage} />
            <Scene key="publications_liked" component={PublicationsLiked} />
                <Scene key="publications_commented" component={PublicationsCommented} />
          <Scene key="Poemes" component={PoemesPage} />
           <Scene key="Poetes" component={PoetsPage} />
            <Scene key="About" component={AboutPage} />
            <Scene key="Contact" component={ContactPage} />
             <Scene key="comments" component={CommentsPage}  />
             <Scene key="FavorisPage" component={FavorisPage} />
             <Scene key="UserGuidePage" component={UserGuidePage} />
             <Scene key="PoemeDetailsPage" component={PoemeDetailsPage} />

             <Scene key="PoemeDefenitionPage" component={PoemeDefenitionPage} />
             <Scene key="PoemeImportance" component={PoemeImportance} />
               <Scene key="PoemeRedaction" component={PoemeRedaction} />
                 <Scene key="PoemeAjaeb" component={PoemeAjaeb} />
                 <Scene key="PoemeEtapes" component={PoemeEtapes} />
                 <Scene key="PoemeCriteres" component={PoemeCriteres} />
                   <Scene key="PoemeBouhour" component={PoemeBouhour} />
                   <Scene key="PoemeModhhaka" component={PoemeModhhaka} />

                     <Scene key="PoetsAlajahiliPage" component={PoetsAlajahiliPage} />
                        <Scene key="PoetsAlabassiPage" component={PoetsAlabassiPage } />
                          <Scene key="PoetsAndolsiPage" component={PoetsAndolsiPage} />
                            <Scene key="PoetsAlothmaniPage" component={PoetsAlothmaniPage} />
                               <Scene key="PoetsIslamPage" component={PoetsIslamPage} />
                              <Scene key="PoetsAlhadithPage" component={PoetsAlhadithPage} />




     </Scene>
   </RouterWithRedux>
</Drawer>

    );
  }
}

const bindAction = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  themeState: state.drawer.themeState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
