import {
  UPDATE_FIELD_LOGIN, SAVE_USER_TOKEN, LOGOUT, SAVE_USER_PSEUDO,
} from '../actions/user';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  username: '',
  // contenu du champ password du formulaire de login
  password: '',
  pseudo: '',
  department_user: '',
  techno_user: '',
  token: null,
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
    case SAVE_USER_TOKEN:
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
        token: '',
      };

    default:
      return state;
  }
};

export default reducer;
