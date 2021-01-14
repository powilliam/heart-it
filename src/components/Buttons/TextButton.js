import React, {useMemo} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components';

import {Button} from '../../styles';

const TextButton = ({title, onPress, active}) => {
  const {
    dark_variant_with_opacity,
    light_with_opacity_of_40,
    light,
  } = useTheme();

  const textColor = useMemo(
    () => (!active ? light_with_opacity_of_40 : light),
    [active],
  );

  return (
    <Container onPress={onPress} rippleColor={dark_variant_with_opacity}>
      <Button color={textColor}>{title}</Button>
    </Container>
  );
};

const Container = styled(RectButton)`
  height: 36px;
  justify-content: center;
  padding: 0px 8px;
`;

export default TextButton;
