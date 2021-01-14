import React from 'react';
import {ThemeProvider} from 'styled-components';

import {DarkTheme} from '../styles';

const ThemeContext = ({children}) => {
  return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>;
};

export default ThemeContext;
