import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';

// get profile, create, clear it from state
// profile: once logged in will make request and hold everything
// profile: if visit another user profile will hold there too
// profiles: list of developers
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
