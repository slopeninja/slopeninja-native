import {
  getResorts,
} from '../api';

export const FETCH_RESORTS = 'FETCH_RESORTS';
export const FETCH_RESORTS_SUCCESS = 'FETCH_RESORTS_SUCCESS';
export const FETCH_RESORTS_FAIL = 'FETCH_RESORTS_FAIL';
export const CHANGE_SEARCH_KEYWORD = 'CHANGE_SEARCH_KEYWORD';

export const fetchResorts = async (dispatch) => {
  dispatch({
    type: FETCH_RESORTS,
  });
  try {
    const resorts = await getResorts();
    dispatch({
      type: FETCH_RESORTS_SUCCESS,
      payload: {
        resorts,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_RESORTS_FAIL,
      payload: {
        error,
      },
    });
  }
};

export const updateKeyword = (dispatch, keyword) => {
  dispatch({
    type: CHANGE_SEARCH_KEYWORD,
    payload: {
      keyword,
    },
  });
};
