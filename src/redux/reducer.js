import { LOGIN, CLEANER_USER, GET_ALL_TYPEUSERS, GET_NEWS, GET_FAVORITES } from "./actions";
import { GET_ALL_STUDENTS } from '../Components/Students/studentsActions'
import { GET_ALL_NOTIFICATIONS, GET_NOTIFICATIONS_IDUSER } from '../Components/Notifications/notificationsActions'
import { GET_ALL_USERS } from '../Components/Users/usersActions'

const initialState = {
  user: [],
  users: [],
  typeUsers: [],
  notificationsId: [],
  notificationsIdUser: [],
  notificationsAll: [],
  news: [],
  favorites: [],
  students: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN:
      return { ...state, user: actions.payload }
    case GET_ALL_NOTIFICATIONS:
      return { ...state, notificationsAll: actions.payload }
    case GET_NOTIFICATIONS_IDUSER:
      return { ...state, notificationsIdUser: actions.payload }
    case GET_ALL_STUDENTS:
      return { ...state, students: actions.payload }
    case GET_ALL_USERS:
      return { ...state, users: actions.payload }
    case GET_ALL_TYPEUSERS:
      return { ...state, typeUsers: actions.payload }
    case CLEANER_USER:
      return { ...state, user: [] }
    case GET_NEWS:
    return {...state,news: actions.payload,
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
