import React, {useRef, useContext, useCallback, useMemo} from 'react';
import {Keyboard} from 'react-native';
import {Host, Portal} from 'react-native-portalize';
import {Modalize} from 'react-native-modalize';
import {useTheme} from 'styled-components';

import {SearchContext, SEARCH_FILTER} from '../../contexts';

import {
  ToolbarLayout,
  IconButton,
  PicturesList,
  ItemButton,
} from '../../components';

import {Container, SearchContainer, SearchInput} from './styles';
import {Headline6} from '../../styles';

const Search = () => {
  const searchRef = useRef({query: ''});
  const modalizeRef = useRef();
  const {data, next, search, refreshState, filter} = useContext(SearchContext);
  const {light_with_opacity_of_40, dark_variant} = useTheme();

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
  const onPressOptions = useCallback(() => modalizeRef.current?.open(), [
    modalizeRef,
  ]);
  const onPressRelevantFilter = useCallback(
    () => refreshState(SEARCH_FILTER.RELEVANT),
    [refreshState],
  );
  const onPressLatestFilter = useCallback(
    () => refreshState(SEARCH_FILTER.LATEST),
    [refreshState],
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
            <IconButton icon="options-outline" onPress={onPressOptions} />
          </SearchContainer>
        </ToolbarLayout>
        <PicturesList data={pictures} onEndReached={next} />
        <Portal>
          <Modalize
            ref={modalizeRef}
            modalStyle={{backgroundColor: dark_variant}}
            adjustToContentHeight
            HeaderComponent={() => <Headline6 m="16px">Filters</Headline6>}>
            <ItemButton
              text="Relevant"
              checked={filter === SEARCH_FILTER.RELEVANT}
              onPress={onPressRelevantFilter}
            />
            <ItemButton
              text="Latest"
              checked={filter === SEARCH_FILTER.LATEST}
              onPress={onPressLatestFilter}
            />
          </Modalize>
        </Portal>
      </Host>
    </Container>
  );
};

export default Search;
