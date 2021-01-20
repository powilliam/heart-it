import React, {useMemo, useCallback, useEffect, createContext} from 'react';

import {useUnsplash} from '../hooks';

import {getPictures} from '../services';

export const PicturesContext = createContext();

const handlers = {
  onSuccess: (state, action) =>
    action.behavior.preserve
      ? [...state.data, ...action.resolved.data]
      : [...action.resolved.data],
};

const PicturesProvider = ({children}) => {
  const [state, execute] = useUnsplash(handlers);

  useEffect(() => {
    execute(
      async (_) => {
        const {data} = await getPictures({page: 1});
        return {
          data,
        };
      },
      {incremental: false, preserve: false},
    );
  }, []);

  const next = useCallback(
    () =>
      execute(
        async (internalState) => {
          const {data} = await getPictures({page: internalState.page + 1});
          return {
            data,
          };
        },
        {incremental: true, preserve: true},
      ),
    [execute],
  );

  const value = useMemo(() => ({...state, next}), [state, next]);

  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesProvider;
