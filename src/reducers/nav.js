import { AppNavigator } from '../navigators/AppNavigator';

const initialState = {
  index: 0,
  routes: [
    {
      key: 'Home_0123',
      routeName: 'Home',
    },
  ],
};

const nav = (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state);

export default nav;
