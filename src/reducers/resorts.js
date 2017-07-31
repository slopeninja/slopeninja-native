const initialState = {
  resorts: [],
  resortsStatus: null,
};

export const FETCH_RESORTS = 'FETCH_RESORTS';
export const FETCH_RESORTS_SUCCESS = 'FETCH_RESORTS_SUCCESS';
export const FETCH_RESORTS_FAIL = 'FETCH_RESORTS_FAIL';

function resorts(state = initialState, action) {
  if (action.type === FETCH_RESORTS_SUCCESS) {
    const newState = {
      ...state,
      resorts: action.payload.resorts,
      resortsStatus: 'success',
    };
    return newState;
  }

  if (action.type === FETCH_RESORTS_FAIL) {
    const newState = {
      ...state,
      resorts: [],
      resortsStatus: 'fail',
    };
    return newState;
  }

  if (action.type === FETCH_RESORTS) {
    const newState = {
      ...state,
      resortsStatus: 'fetching',
    };
    return newState;
  }

  return state;
}


export default resorts;
