import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import Picture from './Picture';

const PicturesList = ({data, onEndReached}) => {
  const renderPictureItem = useCallback(
    ({item}) => <Picture data={item} />,
    [],
  );
  const pictureKeyExtractor = useCallback((item) => item.id, []);

  return (
    <FlatList
      data={data}
      renderItem={renderPictureItem}
      keyExtractor={pictureKeyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PicturesList;
