import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';

import Picture from './Picture';

const PicturesList = ({data}) => {
  const renderPictureItem = useCallback(
    ({item}) => <Picture uri={item.uri} />,
    [],
  );
  const pictureKeyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <FlatList
      data={data}
      renderItem={renderPictureItem}
      keyExtractor={pictureKeyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PicturesList;
