export const MUTATE_NOTIFICATION_BANNER_USER_PREFERENCE = 'MUTATE_NOTIFICATION_BANNER_USER_PREFERENCE';

export const NOTIFICATION_BANNER_USER_PREFERENCE = {
  PENDING: -2,
  NO: -1,
  NOT_NOW: 0,
  YES: 1,
};

/* action creator */
const mutateNotificationBannerUserPreferenceSuccess = preference => ({
  type: MUTATE_NOTIFICATION_BANNER_USER_PREFERENCE,
  payload: {
    preference,
  },
});

/* will be hanled by redux thunk */
export const mutateNotificationBannerUserPreference = preference => (dispatch) => {
  dispatch(mutateNotificationBannerUserPreferenceSuccess(preference));
};
