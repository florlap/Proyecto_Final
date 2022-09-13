import { LOGIN } from "./actions";


const initialState = {
  users: [],
};

export default function reducer(state = initialState, actions) {
  console.log(actions);
  switch (actions.type) {
    case LOGIN:
      return {...state, users: actions.payload}
    default:
      return state;
  }
}
