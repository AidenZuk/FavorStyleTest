import React, { useState } from 'react';
import { View, StatusBar, Platform, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import Screen from '../screens/screen';
import NestNav from '../screens/nestnav'
import { Animated } from 'react-native';
import RenderedDescription from '../screens/RenderedDescription'
const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem
} from '@react-navigation/drawer';

const TopTab = createMaterialTopTabNavigator();


const DAOs = [{
  name: 'DAO 1',
  icon: 'compass',
}, {
  name: 'DAO 2',
  icon: 'compass',
}, {
  name: 'DAO 3',
  icon: 'compass',
}, {
  name: 'DAO 4',
  icon: 'compass',
}, {
  name: 'DAO 5',
  icon: 'compass',
}, {
  name: 'DAO 6',
  icon: 'compass',
}, {
  name: 'DAO 7',
  icon: 'compass',
}, {
  name: 'DAO 8',
  icon: 'compass',
}, {
  name: 'DAO 9',
  icon: 'compass',
}, {
  name: 'DAO 10',
  icon: 'compass',
}, {
  name: 'DAO 11',
  icon: 'compass',
}, {
  name: 'DAO 12',
  icon: 'compass',
}, {
  name: 'DAO 8',
  icon: 'compass',
}, {
  name: 'DAO 9',
  icon: 'compass',
}, {
  name: 'DAO 10',
  icon: 'compass',
}, {
  name: 'DAO 11',
  icon: 'compass',
}, {
  name: 'DAO 12',
  icon: 'compass',
}
]
import {

  useDrawerProgress,
} from '@react-navigation/drawer';


function DAOInfo(props:any) {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <RenderedDescription name="news"/>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {


  return (
    <DrawerContentScrollView {...props} style={{width:80,margin:-5,marginTop:-60,padding:0}}>
      <Animated.View >
    {DAOs.map((item, index) => {return( <DrawerItem  
    activeTintColor = '#FF8D1A'
              icon={ ({focused})=> {return <EIcon  
                    name={item.icon}
                    size={30}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  /> } }
                  label={item.name} onPress={() => alert('change current select dao info')} />)})}
       
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      
      defaultStatus='open'
      
      screenOptions = {{
      drawerType: 'permanent',
      drawerStyle: { width: 60, backgroundColor: 'white', },
      
      drawerActiveBackgroundColor: 'red',
      drawerInactiveBackgroundColor: 'white',
      headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={DAOInfo} />
  
    </Drawer.Navigator>
  );
}

function MyTabs(props) {
  console.log(props);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <TopTab.Navigator screenOptions={{

      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: { fontSize: 17 },
      tabBarPressColor: 'red',
      tabBarIndicatorStyle: { backgroundColor: 'white' },
      // tabBarItemStyle: { margin:5,borderRadius: 30},
      tabBarLabel: ({ focused, color, children }) => {
        return (
          <View style={{ width: 141, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#ff8d1a' : 'white', borderRadius: 30 }}>
            <Text style={{ color: focused ? 'white' : 'grey', fontSize: 17 }}>{children}</Text>
          </View>
        )
      },
      tabBarStyle: {
        display: 'flex',
        width: '90%',
        bottom: 0,
        left: 25,
        right: 25,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 30,
        height: 50,

      },
    }}>
      <TopTab.Screen name="Home1" component={MyDrawer} />
      <TopTab.Screen name="Settings" component={Screen} />
    </TopTab.Navigator>
    </SafeAreaView>
  );
}
export default function BottomNavigator() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ height: 840 }}> */}
        <StatusBar animated={true} backgroundColor="#eaeaea" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: 'flex',
              position: 'absolute',
              bottom: 0,
              left: 25,
              right: 25,
              elevation: 5,
              backgroundColor: '#eaeaea',
              borderRadius: 30,
              height: 60,
            },
            tabBarShowLabel: false,
            headerShown: false,
          })}>
          <Tab.Screen
            name="Dashboard"
            component={MyTabs}

            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: Platform.OS === 'ios' ? 10 : 0,
                  }}>
                  <EIcon
                    name="compass"
                    size={30}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={NestNav}
            props={{ index: 2 }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: Platform.OS === 'ios' ? 10 : 0,
                  }}>
                  <Icon
                    name="message1"
                    size={30}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={Screen}
            props={{ index: 3 }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: Platform.OS === 'ios' ? -10 : -20,
                    width: Platform.OS === 'ios' ? 50 : 60,
                    height: Platform.OS === 'ios' ? 50 : 60,
                    borderRadius: Platform.OS === 'ios' ? 25 : 30,
                    backgroundColor: 'white',
                  }}>
                  <Icon
                    name="home"
                    size={Platform.OS === 'ios' ? 30 : 40}
                    top={Platform.OS === 'ios' ? 10 : 20}
                    left={Platform.OS === 'ios' ? 10 : 20}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  />
                </View>
              ),
              tabBarIconStyle: {},
            }}
          />
          <Tab.Screen
            name="Statistics"
            component={Screen}
            props={{ index: 4 }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: Platform.OS === 'ios' ? 10 : 0,
                  }}>
                  <Icon
                    name="tagso"
                    size={30}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={Screen}
            props={{ index: 5 }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: Platform.OS === 'ios' ? 10 : 0,
                  }}>
                  <Icon
                    name="setting"
                    size={30}
                    color={focused ? '#FF8D1A' : 'darkgray'}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}