import {
  registerUserDevice,
} from '../api';

export const MUTATE_USER_DEVICES = 'MUTATE_USER_DEVICES';
export const MUTATE_USER_DEVICES_SUCCESS = 'MUTATE_USER_DEVICES_SUCCESS';
export const MUTATE_USER_DEVICES_FAIL = 'MUTATE_USER_DEVICES_FAIL';

export const createUserDevice = (deviceName, notificationToken) => async (dispatch) => {
  dispatch({
    type: MUTATE_USER_DEVICES,
  });
  try {
    await registerUserDevice(deviceName, notificationToken);
    dispatch({
      type: MUTATE_USER_DEVICES_SUCCESS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: MUTATE_USER_DEVICES_FAIL,
      payload: {
        error,
      },
    });
  }
};
