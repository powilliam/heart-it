import React, {useMemo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {Caption, Body1} from '../../styles';

const PictureModalizeHeaderComponent = ({author, description}) => {
  const uri = useMemo(() => author.profile_image.medium, [author]);
  const name = useMemo(() => author.name, [author]);

  return (
    <Container>
      <AuthorImage resizeMode="cover" resizeMethod="scale" source={{uri}} />
      <View>
        <Caption ml="16px" mb="4px">
          {name}
        </Caption>
        <Body1 ml="16px">{description}</Body1>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 22px 16px 6px 16px;
`;

const AuthorImage = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default PictureModalizeHeaderComponent;
