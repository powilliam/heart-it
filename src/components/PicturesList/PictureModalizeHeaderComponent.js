import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {Caption, Body1} from '../../styles';

const PictureModalizeHeaderComponent = ({author, description}) => {
  return (
    <Container>
      <AuthorImage
        resizeMode="cover"
        resizeMethod="scale"
        source={{uri: author.uri}}
      />
      <View>
        <Caption ml="16px" mb="4px">
          {author.name}
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
