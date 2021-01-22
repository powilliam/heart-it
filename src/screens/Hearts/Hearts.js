import React, {useMemo} from 'react';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObervables from '@nozbe/with-observables';
import {Host} from 'react-native-portalize';

import {Toolbar, IconButton, PicturesList} from '../../components';

import {Container} from './styles';

const Hearts = ({hearts}) => {
  const normalizedHearts = useMemo(
    () =>
      hearts.map((heart) => ({
        id: heart._raw.id,
        description: heart._raw.description,
        urls: {
          regular: heart._raw.source,
        },
        user: {
          name: heart._raw.author_name,
          profile_image: {
            medium: heart._raw.author_source,
          },
        },
      })),
    [hearts],
  );

  return (
    <Container>
      <Host>
        <Toolbar
          title="Hearts"
          actions={[<IconButton icon="ellipsis-vertical-outline" />]}
        />
        <PicturesList data={normalizedHearts} />
      </Host>
    </Container>
  );
};

export default withDatabase(
  withObervables([], ({database}) => ({
    hearts: database.get('hearts').query().observe(),
  }))(Hearts),
);
