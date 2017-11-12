import {
  FETCH_RESORTS,
  FETCH_RESORTS_SUCCESS,
  FETCH_RESORTS_FAIL,
  CHANGE_SEARCH_KEYWORD,
} from '../actions/resorts';

const initialState = {
  resorts: [],
  resortsStatus: null,
  keyword: null,
};

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

  if (action.type === CHANGE_SEARCH_KEYWORD) {
    const newState = {
      ...state,
      keyword: action.payload.keyword,
    };
    return newState;
  }

  return state;
}


export default resorts;
