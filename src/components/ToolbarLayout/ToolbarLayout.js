import React from 'react';

import Toolbar from './Toolbar';

import {Container} from './styles';

const ToolbarLayout = ({children, ...toolbar}) => {
  return (
    <Container>
      <Toolbar {...toolbar} />
      {children}
    </Container>
  );
};

export default ToolbarLayout;
