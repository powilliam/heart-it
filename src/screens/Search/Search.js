import React from 'react';
import {useTheme} from 'styled-components';

import {ToolbarLayout, IconButton} from '../../components';

import {Container, SearchContainer, SearchInput} from './styles';

const Search = () => {
  const {light_with_opacity_of_40} = useTheme();

  return (
    <Container>
      <ToolbarLayout
        title="Search"
        actions={[<IconButton icon="search-outline" />]}>
        <SearchContainer>
          <SearchInput
            placeholder="Architecture"
            placeholderTextColor={light_with_opacity_of_40}
          />
          <IconButton icon="options-outline" />
        </SearchContainer>
      </ToolbarLayout>
    </Container>
  );
};

export default Search;
