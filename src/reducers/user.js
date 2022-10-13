import {
  UPDATE_FIELD_LOGIN, SAVE_USER_TOKEN, LOGOUT, SAVE_USER_PSEUDO, WRONG_LOGIN,
} from '../actions/user';

export const initialState = {
  logged: null,
  // contenu du champ email du formulaire de login
  username: '',
  // contenu du champ password du formulaire de login
  password: '',
  pseudo: '',
  department_user: '',
  techno_user: [],
  token: null,
  is_verified: false,
  role: null
  // localStorage.getItem('token')
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD_LOGIN:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'username') {
        return {
          ...state,
          username: action.value,
        };
      }
      // else implicite : si on arrive à cette ligne c'est que forcément on n'est pas
      // passé dans le if
      return {
        ...state,
        password: action.value,
      };
    case WRONG_LOGIN: {
      return {
        ...state,
        logged: false,
      };
    }
    case SAVE_USER_TOKEN:
      // localStorage.setItem('token',action.token);
      return {
        ...state,
        logged: true,
        token: action.token,
        username: '',
        password: '',
      };
    case SAVE_USER_PSEUDO:
      return {
        ...state,
        // logged: true,
        pseudo: action.pseudo,
        department_user: action.department,
        techno_user: action.techno,
        is_verified: action.verified,
        role: action.role,
      };
    // case LOGIN_TOKEN:
    //   return {
    //     ...state,
    //     token: state.token,
    //   };
    case LOGOUT:
      return {
        ...state,
        // pseudo: action.pseudo,
        logged: false,
        token: null,
        pseudo: '',
        department_user: '',
        techno_user: '',
      };

    default:
      return state;
  }
};

export default reducer;
