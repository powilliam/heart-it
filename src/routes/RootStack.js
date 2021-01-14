import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {SearchScreen, PicturesScreen, HeartsScreen} from '../screens';

const Stack = createStackNavigator();

const options = {
  ...TransitionPresets.SlideFromRightIOS,
};

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pictures" screenOptions={options}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Pictures" component={PicturesScreen} />
      <Stack.Screen name="Hearts" component={HeartsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
