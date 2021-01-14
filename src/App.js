import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import {ThemeContext} from './contexts';

import Routes from './routes';

import {DarkTheme} from './styles';

const App = () => (
  <Fragment>
    <ThemeContext>
      <Routes />
    </ThemeContext>
    <StatusBar
      backgroundColor={DarkTheme.dark_variant}
      barStyle="light-content"
    />
  </Fragment>
);

export default App;
