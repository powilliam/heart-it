import React, {useCallback} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {PicturesProvider} from '../contexts';

import {SearchScreen, PicturesScreen, HeartsScreen} from '../screens';

import {DarkTheme} from '../styles';

const Stack = createStackNavigator();

const options = {
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false,
  cardStyle: {
    backgroundColor: DarkTheme.dark,
  },
};

const RootStack = () => {
  const renderSearchScreen = useCallback(() => <SearchScreen />, []);
  const renderPicturesScreen = useCallback(
    () => (
      <PicturesProvider>
        <PicturesScreen />
      </PicturesProvider>
    ),
    [],
  );
  const renderHeartsScreen = useCallback(() => <HeartsScreen />, []);

  return (
    <Stack.Navigator initialRouteName="Pictures" screenOptions={options}>
      <Stack.Screen name="Search" component={renderSearchScreen} />
      <Stack.Screen name="Pictures" component={renderPicturesScreen} />
      <Stack.Screen name="Hearts" component={renderHeartsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
