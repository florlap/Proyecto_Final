import { LOGIN, CLEANER_USER, GET_ALL_IDUSER_NOTIFICATIONS, GET_ALL_TYPEUSERS } from "./actions";

const initialState = {
  user: [],
  typeUsers:[],
  notifications: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN:
      return { ...state, user: actions.payload }
    case GET_ALL_IDUSER_NOTIFICATIONS:
      return { ...state, notifications: actions.payload }
    case GET_ALL_TYPEUSERS:
      return { ...state, typeUsers: actions.payload }
    case CLEANER_USER:
      return { ...state, user: [] }
    default:
      return state;
  }
}
