import {useReducer, useCallback} from 'react';

export const STATE_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const reducer = (state, action) => ({
  onIdle,
  onPending,
  onSuccess,
  onFailure,
}) => {
  switch (action.type) {
    case STATE_STATUS.IDLE:
      return {
        ...state,
        status: action.type,
        loading: false,
        failure: false,
        data: onIdle ? onIdle(state, action) : state.data,
      };

    case STATE_STATUS.PENDING:
      return {
        ...state,
        status: action.type,
        loading: true,
        failure: false,
        data: onPending ? onPending(state, action) : state.data,
      };

    case STATE_STATUS.SUCCESS:
      return {
        ...state,
        status: action.type,
        loading: false,
        failure: false,
        page: action.behavior.incremental
          ? state.page + 1
          : action.behavior.reset
          ? 1
          : state.page,
        data: onSuccess ? onSuccess(state, action) : state.data,
      };

    case STATE_STATUS.FAILURE:
      return {
        ...state,
        status: action.type,
        loading: false,
        failure: true,
        data: onFailure ? onFailure(state, action) : state.data,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const defaultState = {
  status: STATE_STATUS.IDLE,
  page: 1,
};

const useUnsplash = (handlers, initialState) => {
  const [state, dispatch] = useReducer(
    (state, action) => reducer(state, action)(handlers),
    {...defaultState, ...initialState},
  );

  const execute = useCallback(
    async (resolver, behavior) => {
      dispatch({type: STATE_STATUS.PENDING, behavior});
      try {
        const resolved = await resolver(state);
        dispatch({
          type: STATE_STATUS.SUCCESS,
          resolved,
          behavior,
        });
      } catch (error) {
        dispatch({type: STATE_STATUS.FAILURE, behavior});
      } finally {
        dispatch({type: STATE_STATUS.IDLE, behavior});
      }
    },
    [state],
  );

  return [state, execute];
};

export default useUnsplash;
