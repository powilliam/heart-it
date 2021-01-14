import React, {useMemo, useCallback, Fragment} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {IconButton} from '../Buttons';

import {Headline6} from '../../styles';

const Toolbar = ({title, navigationIcon, onPressNavigationIcon, actions}) => {
  const {canGoBack, goBack} = useNavigation();

  const icon = useMemo(() => (canGoBack() ? 'arrow-back' : navigationIcon), [
    canGoBack,
    navigationIcon,
  ]);

  const handleOnPressNavigationIcon = useCallback(
    () =>
      canGoBack()
        ? goBack()
        : onPressNavigationIcon
        ? onPressNavigationIcon()
        : () => {},
    [canGoBack, onPressNavigationIcon],
  );

  return (
    <Container>
      <Content>
        {icon && (
          <IconButton icon={icon} onPress={handleOnPressNavigationIcon} />
        )}
        <Headline6 ml="8px" maxWidth="150px" numberOfLines={1}>
          {title}
        </Headline6>
      </Content>
      <Content>
        {actions &&
          actions.map((action, index) => (
            <Fragment key={index}>{action}</Fragment>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  background-color: ${(props) => props.theme.dark_variant};
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default Toolbar;
