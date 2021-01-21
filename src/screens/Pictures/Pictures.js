import React, {useCallback, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {PicturesContext, PICTURES_FILTER} from '../../contexts';

import {
  ToolbarLayout,
  IconButton,
  TextButton,
  PicturesList,
} from '../../components';

import {Container, FiltersContainer} from './styles';

const Pictures = () => {
  const {data: pictures, next, refreshState, filter} = useContext(
    PicturesContext,
  );
  const navigation = useNavigation();

  const navigateToSearchScreen = useCallback(
    () => navigation.navigate('Search'),
    [navigation],
  );
  const navigateToHeartsScreen = useCallback(
    () => navigation.navigate('Hearts'),
    [navigation],
  );
  const onPressPopular = useCallback(
    () => refreshState(PICTURES_FILTER.POPULAR),
    [refreshState],
  );
  const onPressLatest = useCallback(
    () => refreshState(PICTURES_FILTER.LATEST),
    [refreshState],
  );
  const onPressOldest = useCallback(
    () => refreshState(PICTURES_FILTER.OLDEST),
    [refreshState],
  );

  return (
    <Container>
      <Host>
        <ToolbarLayout
          title="Pictures"
          navigationIcon="search-outline"
          onPressNavigationIcon={navigateToSearchScreen}
          actions={[
            <IconButton
              icon="folder-open-outline"
              onPress={navigateToHeartsScreen}
            />,
          ]}>
          <FiltersContainer>
            <TextButton
              title="Popular"
              active={filter === PICTURES_FILTER.POPULAR}
              onPress={onPressPopular}
            />
            <TextButton
              title="Latest"
              active={filter === PICTURES_FILTER.LATEST}
              onPress={onPressLatest}
            />
            <TextButton
              title="Oldest"
              active={filter === PICTURES_FILTER.OLDEST}
              onPress={onPressOldest}
            />
          </FiltersContainer>
        </ToolbarLayout>
        <PicturesList data={pictures} onEndReached={next} />
      </Host>
    </Container>
  );
};

export default Pictures;
