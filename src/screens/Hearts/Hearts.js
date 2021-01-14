import React from 'react';

import {Toolbar, IconButton} from '../../components';

import {Container} from './styles';

const Hearts = () => {
  return (
    <Container>
      <Toolbar
        title="Hearts"
        actions={[<IconButton icon="ellipsis-vertical-outline" />]}
      />
    </Container>
  );
};

export default Hearts;
