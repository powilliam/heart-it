import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BorderlessButton} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components';

const IconButton = ({icon, onPress}) => {
  const {light, dark_variant_with_opacity} = useTheme();

  return (
    <Container onPress={onPress} rippleColor={dark_variant_with_opacity}>
      <Ionicons name={icon} size={24} color={light} />
    </Container>
  );
};

const Container = styled(BorderlessButton)`
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export default IconButton;
