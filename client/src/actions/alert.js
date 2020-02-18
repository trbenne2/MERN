import { SET_ALERT, REMOVE_ALERT } from './types';

// uuid to get a universial id
import uuid from 'uuid';

// dispatch more than 1 action type by dispatch thanks to thunk
// action dispatches to => reducer adds to => state
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // set timeout to remove alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
