import {
  MUTATE_NOTIFICATION_BANNER_USER_PREFERENCE,
  NOTIFICATION_BANNER_USER_PREFERENCE,
} from '../actions/userSession';

const initialState = {
  notificationBannerUserPreference: NOTIFICATION_BANNER_USER_PREFERENCE.PENDING,
};

function userSession(state = initialState, action) {
  if (action.type === MUTATE_NOTIFICATION_BANNER_USER_PREFERENCE) {
    const newState = {
      ...state,
      notificationBannerUserPreference: action.payload.preference,
    };
    return newState;
  }
  return state;
}

export default userSession;
