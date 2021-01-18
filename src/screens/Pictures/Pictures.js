import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {PICTURES_DATA} from '../../services';

import {
  ToolbarLayout,
  IconButton,
  TextButton,
  PicturesList,
} from '../../components';

import {Container, FiltersContainer} from './styles';

const Pictures = () => {
  const navigation = useNavigation();

  const navigateToSearchScreen = useCallback(
    () => navigation.navigate('Search'),
    [navigation],
  );
  const navigateToHeartsScreen = useCallback(
    () => navigation.navigate('Hearts'),
    [navigation],
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
            <TextButton title="Popular" active onPress={() => {}} />
            <TextButton title="Latest" />
            <TextButton title="Oldest" />
          </FiltersContainer>
        </ToolbarLayout>
        <PicturesList data={PICTURES_DATA} />
      </Host>
    </Container>
  );
};

export default Pictures;
