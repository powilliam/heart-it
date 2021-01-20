import React, {useRef, useContext, useCallback, useMemo} from 'react';
import {Keyboard} from 'react-native';
import {Host} from 'react-native-portalize';
import {useTheme} from 'styled-components';

import {SearchContext} from '../../contexts';

import {ToolbarLayout, IconButton, PicturesList} from '../../components';

import {Container, SearchContainer, SearchInput} from './styles';

const Search = () => {
  const searchRef = useRef({query: ''});
  const {data, next, search} = useContext(SearchContext);
  const {light_with_opacity_of_40} = useTheme();

  const pictures = useMemo(() => data.results, [data]);

  const submit = useCallback(() => {
    Keyboard.dismiss();
    search(searchRef.current?.query);
  }, [searchRef, search]);
  const onChangeSearchInputText = useCallback(
    (text) => {
      searchRef.current.query = text;
    },
    [searchRef],
  );

  return (
    <Container>
      <Host>
        <ToolbarLayout
          title="Search"
          actions={[<IconButton icon="search-outline" onPress={submit} />]}>
          <SearchContainer>
            <SearchInput
              placeholder="Architecture"
              onChangeText={onChangeSearchInputText}
              placeholderTextColor={light_with_opacity_of_40}
              onSubmitEditing={submit}
            />
            <IconButton icon="options-outline" />
          </SearchContainer>
        </ToolbarLayout>
        <PicturesList data={pictures} onEndReached={next} />
      </Host>
    </Container>
  );
};

export default Search;
