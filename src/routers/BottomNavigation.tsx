import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Chats from '../screens/Chats';
import Profile from '../screens/Profile';
import News from '../screens/News';
import IconFeed from '../assets/icons/feed.png';
import IconChats from '../assets/icons/chats.png';
import IconNews from '../assets/icons/news.png';
import IconProfile from '../assets/icons/profile.png';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
  const screenOptions: any = ({route}: any) => ({
    tabBarIcon: () => {
      let icon: any;
      if (route.name === 'Feed') {
        icon = IconFeed;
      } else if (route.name === 'Chats') {
        icon = IconChats;
      } else if (route.name === 'News') {
        icon = IconNews;
      } else {
        icon = IconProfile;
      }
      return (
        <View>
          <Image source={icon} style={{height: 20, width: 20}} />
        </View>
      );
    },
    headerShown: false,
    tabBarStyle: {height: 48},
    tabBarShowLabel: false,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
