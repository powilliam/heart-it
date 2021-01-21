import React, {useState, useMemo, useCallback, createContext} from 'react';

import {useUnsplash} from '../hooks';

import {searchPictures} from '../services';

export const SearchContext = createContext();

export const SEARCH_FILTER = {
  RELEVANT: 'relevant',
  LATEST: 'latest',
};

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
  const [filter, setFilter] = useState(SEARCH_FILTER.RELEVANT);

  const next = useCallback(() => {
    execute(
      async (internalState) => {
        const {data} = await searchPictures({
          query: internalState.data.query,
          page: internalState.page + 1,
          order_by: filter,
        });
        return data;
      },
      {preserve: true, incremental: true},
    );
  }, [execute, filter]);
  const search = useCallback(
    (query) => {
      query &&
        execute(
          async (_) => {
            const {data} = await searchPictures({
              query,
              page: 1,
              order_by: filter,
            });
            return {
              query,
              ...data,
            };
          },
          {reset: true},
        );
    },
    [execute, filter],
  );
  const refreshState = useCallback(
    (filter) => {
      if (!filter) return;
      setFilter(filter);
      execute(
        async (_) => {
          const {data} = await searchPictures({
            query,
            page: 1,
            order_by: filter,
          });
          return data;
        },
        {reset: true},
      );
    },
    [execute],
  );

  const value = useMemo(
    () => ({...state, next, search, refreshState, filter}),
    [state, next, search, refreshState, filter],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
