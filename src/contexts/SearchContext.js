import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
} from 'react';

import {useUnsplash} from '../hooks';

import {searchPictures} from '../services';

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
  const [state, executeAsync] = useUnsplash();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const next = useCallback(() => {
    setPage(page + 1);
    executeAsync(
      searchPictures,
      {query, page: page + 1},
      {preserveState: true},
    );
  }, [page, query]);
  const search = useCallback((query) => {
    setQuery(query);
    setPage(1);
    executeAsync(searchPictures, {query, page: 1});
  }, []);

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
