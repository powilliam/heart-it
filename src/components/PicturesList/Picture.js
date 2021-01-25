import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from 'react';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Q} from '@nozbe/watermelondb';
import {useRoute} from '@react-navigation/native';
import styled, {useTheme} from 'styled-components/native';

import {HeartsContext} from '../../contexts';

import {ItemButton} from '../Buttons';
import PictureModalizeHeaderComponent from './PictureModalizeHeaderComponent';

const {width} = Dimensions.get('window');

const Picture = ({data}) => {
  const modalizeRef = useRef();
  const {name} = useRoute();
  const {heartsCollection, heart, unheart} = useContext(HeartsContext);
  const {dark_variant, red, yellow} = useTheme();

  const [hearted, setHearted] = useState(false);

  useEffect(() => {
    const subscription = heartsCollection
      .query(Q.where('source', uri))
      .observe()
      .subscribe((hearts) =>
        hearts.length > 0 ? setHearted(true) : setHearted(false),
      );
    return () => subscription.unsubscribe();
  });

  const id = useMemo(() => data.id, [data]);
  const uri = useMemo(() => data.urls.small, [data]);
  const author = useMemo(() => data.user, [data]);
  const description = useMemo(() => data.description, [data]);

  const onPressImage = useCallback(() => modalizeRef.current?.open(), [
    modalizeRef,
  ]);
  const onPressHeartit = useCallback(async () => {
    if (hearted) {
      if (name === 'Hearts') modalizeRef.current?.close();
      await unheart(id);
    } else {
      await heart({
        description,
        source: uri,
        author_name: author.name,
        author_source: author.profile_image.medium,
      });
    }
  }, [
    hearted,
    heart,
    unheart,
    id,
    uri,
    author,
    description,
    modalizeRef,
    name,
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
              author={author}
              description={description}
            />
          )}>
          <ItemButton
            icon="heart"
            iconColor={red}
            text="Heart it"
            onPress={onPressHeartit}
            checked={hearted}
          />
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
