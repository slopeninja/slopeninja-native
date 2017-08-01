import {
  FETCH_RESORTS,
  FETCH_RESORTS_SUCCESS,
  FETCH_RESORTS_FAIL,
  CHANGE_SEARCH_KEYWORD,
} from '../reducers/resorts';

import {
  getResorts,
} from '../api';

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
  console.log(keyword)
  dispatch({
    type: CHANGE_SEARCH_KEYWORD,
    payload: {
      keyword,
    },
  });
};
