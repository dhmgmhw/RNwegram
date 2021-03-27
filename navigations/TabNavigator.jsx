import React, { useEffect } from 'react';
// 유저의 Platform이 뭔지 확인하는 기능
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import AddPage from '../pages/AddPage';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        // { focused }는 TabNavigator에서 지원하는 기본 기능. 버튼이 눌렸는지 안눌렸는지
        tabBarIcon: ({ focused }) => {
          //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'MainPage') {
            iconName += 'list';
          } else if (route.name === 'AddPage') {
            iconName += 'apps-outline';
          } else if (route.name === 'MyPage') {
            iconName += 'person';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'midnightblue' : 'grey'}
              //   눌렸을때 focused 색깔 정하는부분
              size={30}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 70,
          fontSize: 10,
        },
      }}>
      <Tabs.Screen name='MainPage' component={MainPage} />
      <Tabs.Screen name='AddPage' component={AddPage} />
      <Tabs.Screen name='MyPage' component={MyPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
