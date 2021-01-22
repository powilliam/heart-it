import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import {
  ThemeContext,
  PicturesProvider,
  SearchProvider,
  HeartsProvider,
} from './contexts';

import Routes from './routes';

import database from './database';

import {DarkTheme} from './styles';

const App = () => (
  <Fragment>
    <DatabaseProvider database={database}>
      <PicturesProvider>
        <SearchProvider>
          <HeartsProvider>
            <ThemeContext>
              <Routes />
            </ThemeContext>
          </HeartsProvider>
        </SearchProvider>
      </PicturesProvider>
    </DatabaseProvider>
    <StatusBar
      backgroundColor={DarkTheme.dark_variant}
      barStyle="light-content"
    />
  </Fragment>
);

export default App;
