import React, {useCallback} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styled, {useTheme, css} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Body1, Body2} from '../../styles';

const ItemButton = ({icon, iconColor, text, description, checked, onPress}) => {
  const {light, dark_variant} = useTheme();

  return (
    <RectButton onPress={onPress} rippleColor={dark_variant}>
      <Container>
        <Content>
          <Ionicons name={icon} color={iconColor || light} size={24} />
          <View>
            <Body1 ml={icon && '16px'}>{text}</Body1>
            {description && (
              <Body2 ml={icon && '16px'} mt="4px">
                {description}
              </Body2>
            )}
          </View>
        </Content>
        {checked && (
          <Ionicons name="checkmark-outline" color={light} size={24} />
        )}
      </Container>
    </RectButton>
  );
};

const row = css`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  ${row}
  padding: 16px;
  justify-content: space-between;
`;

const Content = styled.View`
  ${row}
`;

export default ItemButton;
