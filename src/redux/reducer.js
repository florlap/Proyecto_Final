import { GET_NEWS, LOGIN } from "./actions";


const initialState = {
  users: [],
  news: []
};

export default function reducer(state = initialState, actions) {
  console.log(actions);
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        users: actions.payload
      }
    case GET_NEWS:
      return {
        ...state,
        news: actions.payload
      }
    default:
      return state;
  }
}
