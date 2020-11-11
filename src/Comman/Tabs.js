import React, {Component} from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DiscriptionTab from './DiscriptionTab';
import OtherPropertyTabs from './OtherPropertyTabs';

const Tab = createMaterialTopTabNavigator();

function Tab_Pages() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discription" component={DiscriptionTab} />
      <Tab.Screen name="Other Property" component={OtherPropertyTabs} />
    </Tab.Navigator>
  );
}

export default Tab_Pages;
