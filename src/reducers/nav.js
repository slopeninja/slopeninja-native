import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialState = {
  index: 0,
  routes: [
    {
      key: 'Home_0123',
      routeName: 'Home'
    },
  ],
};

const nav = (state = initialState, action) => {
  console.log(state, action);
  return AppNavigator.router.getStateForAction(action, state);
};

export default nav;
