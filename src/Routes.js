import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator } from 'react-navigation'
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Welcome from './pages/Welcome';
import FundationIcon from 'react-native-vector-icons/Foundation';
import EnvilIcon from 'react-native-vector-icons/Foundation';

const MainStack = createAppContainer(
  createMaterialBottomTabNavigator({
    Main: {
      screen: MainPage, 
      navigationOptions:{ 
        tabBarIcon:({ tintColor }) => <FundationIcon name='list' size={26} style={{color: tintColor}}/>
    }},
    User: {
      screen: UserPage, 
      navigationOptions:{ 
        tabBarIcon:({ tintColor }) => <EnvilIcon name='torsos-all' size={26} style={{color: tintColor}}/>
    }},
  },{
    initialRouteName: 'Main',
    activeColor: '#4c566a',
    inactiveColor: '#8a8f99',
    barStyle: { backgroundColor: '#e5e9f0' },
    labeled: false,
    shifting: true
  })
);

const AuthStack = createSwitchNavigator ({
  Login, Signup
  });

const RootStack = createSwitchNavigator({
  Welcome,AuthStack, MainStack
});

const Router = createAppContainer(RootStack);
export default Router;
