import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// pertain to alerts
const initialState = [];

// action has type and data sometimes data, type and payload
// takes in state and action. action gets dispatched from action file
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      // state is immutable. adding alert. include any other state that's there.
      return [...state, payload];
    case REMOVE_ALERT:
      // return every state except the one specified
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
