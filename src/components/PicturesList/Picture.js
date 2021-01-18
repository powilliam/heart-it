import React, {Fragment, useRef, useCallback} from 'react';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import styled, {useTheme} from 'styled-components/native';

import {ItemButton} from '../Buttons';
import PictureModalizeHeaderComponent from './PictureModalizeHeaderComponent';

const {width} = Dimensions.get('window');

const Picture = ({uri}) => {
  const modalizeRef = useRef();

  const {dark_variant, red, yellow} = useTheme();

  const onPressImage = useCallback(() => modalizeRef.current?.open(), [
    modalizeRef,
  ]);

  return (
    <Fragment>
      <RectButton onPress={onPressImage} rippleColor={dark_variant}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          screenSize={width}
          source={{uri}}
        />
      </RectButton>
      <Portal>
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight
          modalStyle={{
            backgroundColor: dark_variant,
          }}
          HeaderComponent={() => (
            <PictureModalizeHeaderComponent
              author={{
                uri:
                  'https://images.unsplash.com/photo-1610659838219-45b564583af2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                name: 'Wonderful Woman',
              }}
              description="Lorem Ipsum Dolor"
            />
          )}>
          <ItemButton icon="heart" iconColor={red} text="Heart it" />
          <ItemButton icon="cloud-download-outline" text="Download" />
          <ItemButton
            icon="logo-chrome"
            iconColor={yellow}
            text="Open in the browser"
          />
        </Modalize>
      </Portal>
    </Fragment>
  );
};

const Image = styled.Image`
  width: ${(props) => props.screenSize}px;
  height: ${(props) => props.screenSize}px;
`;

export default Picture;
