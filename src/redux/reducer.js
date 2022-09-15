import { LOGIN, CLEANER_USER } from "./actions";


const initialState = {
  user: [],
  notifications: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN:
      return { ...state, user: actions.payload }
    case "GET_ALL_IDUSER_NOTIFICATIONS":
      return { ...state, notifications: actions.payload }
    case CLEANER_USER:
      return {...state, user: []}
    default:
      return state;
  }
}
