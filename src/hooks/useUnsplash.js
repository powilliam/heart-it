import {useReducer, useCallback} from 'react';

const STATE_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case STATE_STATUS.IDLE:
      return {
        ...state,
        status: STATE_STATUS.IDLE,
        loading: false,
        failure: false,
      };

    case STATE_STATUS.PENDING:
      return {
        status: STATE_STATUS.PENDING,
        data: state.data.length > 0 ? [...state.data] : [],
        loading: true,
        failure: false,
      };

    case STATE_STATUS.SUCCESS:
      return {
        status: STATE_STATUS.SUCCESS,
        data: [...state.data, ...action.data],
        loading: false,
        failure: false,
      };

    case STATE_STATUS.FAILURE:
      return {
        ...state,
        status: STATE_STATUS.FAILURE,
        failure: true,
        loading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useUnsplash = () => {
  const [state, dispatch] = useReducer(reducer, {
    status: STATE_STATUS.IDLE,
    data: [],
    loading: false,
    failure: false,
  });

  const executeAsync = useCallback(
    async (axiosServiceCallback, axiosServiceConfig) => {
      dispatch({type: STATE_STATUS.PENDING});
      try {
        const {data} = await axiosServiceCallback(axiosServiceConfig);
        dispatch({
          type: STATE_STATUS.SUCCESS,
          data,
        });
      } catch (error) {
        dispatch({type: STATE_STATUS.FAILURE});
      } finally {
        dispatch({type: STATE_STATUS.IDLE});
      }
    },
    [],
  );

  return [state, executeAsync];
};

export default useUnsplash;
