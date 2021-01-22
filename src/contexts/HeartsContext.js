import React, {createContext, useCallback, useMemo} from 'react';
import {useDatabase} from '@nozbe/watermelondb/hooks';

export const HeartsContext = createContext();

const HeartsProvider = ({children}) => {
  const database = useDatabase();

  const heartsCollection = useMemo(() => database.collections.get('hearts'), [
    database,
  ]);

  const heart = useCallback(
    async (values) => {
      try {
        await database.action(async () => {
          await heartsCollection.create((heart) =>
            Object.assign(heart, values),
          );
        });
      } finally {
      }
    },
    [heartsCollection],
  );
  const unheart = useCallback(
    async (id) => {
      try {
        await database.action(async () => {
          const heart = await heartsCollection.find(id);
          await heart.destroyPermanently();
        });
      } finally {
      }
    },
    [heartsCollection],
  );

  const value = useMemo(() => ({heart, unheart, heartsCollection}), [
    heart,
    unheart,
    heartsCollection,
  ]);

  return (
    <HeartsContext.Provider value={value}>{children}</HeartsContext.Provider>
  );
};

export default HeartsProvider;
