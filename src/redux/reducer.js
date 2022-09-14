import { LOGIN } from "./actions";


const initialState = {
  user: [],
};

export default function reducer(state = initialState, actions) {
  console.log(actions);
  switch (actions.type) {
    case LOGIN:
      return {...state, user: actions.payload}
    default:
      return state;
  }
}
