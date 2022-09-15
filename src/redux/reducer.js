import { LOGIN, CLEANER_USER, GET_NEWS, GET_FAVORITES } from "./actions";

const initialState = {
  user: [],
  notifications: [],
  news: [],
  favorites: []
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN:
      return { ...state, user: actions.payload };
    case "GET_ALL_IDUSER_NOTIFICATIONS":
      return { ...state, notifications: actions.payload };
    case CLEANER_USER:
      return { ...state, user: [] };
    case GET_NEWS:
      return {
        ...state,
        news: actions.payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: actions.payload,
      };
    default:
      return state;
  }
}
