import React, {useMemo, useCallback, createContext} from 'react';

import {useUnsplash} from '../hooks';

import {searchPictures} from '../services';

export const SearchContext = createContext();

const handlers = {
  onSuccess: (state, action) =>
    action.behavior.preserve
      ? {
          ...action.resolved,
          results: [...state.data.results, ...action.resolved.results],
        }
      : {...action.resolved},
};

const initialState = {
  data: {
    results: [],
  },
};

const SearchProvider = ({children}) => {
  const [state, execute] = useUnsplash(handlers, initialState);

  const next = useCallback(() => {
    execute(
      async (internalState) => {
        const {data} = await searchPictures({
          query: internalState.data.query,
          page: internalState.page + 1,
        });
        return data;
      },
      {preserve: true, incremental: true},
    );
  }, [execute]);
  const search = useCallback(
    (query) => {
      query &&
        execute(
          async (_) => {
            const {data} = await searchPictures({
              query,
              page: 1,
            });
            return {
              query,
              ...data,
            };
          },
          {reset: true},
        );
    },
    [execute],
  );

  const value = useMemo(() => ({...state, next, search}), [
    state,
    next,
    search,
  ]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
