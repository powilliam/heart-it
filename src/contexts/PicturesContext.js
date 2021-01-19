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

const PicturesProvider = ({children}) => {
  const [state, executeAsync] = useUnsplash();
  const [page, setPage] = useState(1);

  useEffect(() => {
    executeAsync(getPictures, {page, per_page: 5}, {preserveState: true});
  }, [page]);

  const next = useCallback(() => setPage(page + 1), [page]);

  const value = useMemo(() => ({...state, next}), [state, next]);

  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesProvider;
