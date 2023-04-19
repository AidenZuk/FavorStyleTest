
import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Feed from './screen';
import Messages from './screen';
const Tab = createBottomTabNavigator();
function NestNav() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default  NestNav;