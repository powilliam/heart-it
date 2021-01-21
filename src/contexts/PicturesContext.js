import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  createContext,
} from 'react';

import {useUnsplash} from '../hooks';

import {getPictures} from '../services';

export const PicturesContext = createContext();

export const PICTURES_FILTER = {
  POPULAR: 'popular',
  LATEST: 'latest',
  OLDEST: 'oldest',
};

const handlers = {
  onSuccess: (state, action) =>
    action.behavior.preserve
      ? [...state.data, ...action.resolved.data]
      : [...action.resolved.data],
};

const PicturesProvider = ({children}) => {
  const [state, execute] = useUnsplash(handlers);
  const [filter, setFilter] = useState(PICTURES_FILTER.POPULAR);

  useEffect(() => {
    execute(
      async (_) => {
        const {data} = await getPictures({
          page: 1,
          order_by: filter,
        });
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
          const {data} = await getPictures({
            page: internalState.page + 1,
            order_by: filter,
          });
          return {
            data,
          };
        },
        {incremental: true, preserve: true},
      ),
    [execute, filter],
  );
  const refreshState = useCallback(
    (filter) => {
      if (!filter) return;
      setFilter(filter);
      execute(
        async (_) => {
          const {data} = await getPictures({page: 1, order_by: filter});
          return {
            data,
          };
        },
        {reset: true},
      );
    },
    [execute],
  );

  const value = useMemo(() => ({...state, next, refreshState, filter}), [
    state,
    next,
    refreshState,
    filter,
  ]);

  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesProvider;
