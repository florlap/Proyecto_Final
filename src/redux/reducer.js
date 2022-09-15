import { LOGIN } from "./actions";


const initialState = {
  user: [],
  notifications: [],
};

export default function reducer(state = initialState, actions) {
  console.log(actions);
  switch (actions.type) {
    case LOGIN:
      return { ...state, user: actions.payload }
    case "GET_ALL_IDUSER_NOTIFICATIONS":
      return { ...state, notifications: actions.payload }
    default:
      return state;
  }
}
