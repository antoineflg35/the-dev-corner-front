import { UPDATE_FIELD_LOGIN, LOGIN, SAVE_DATA_USER, LOGOUT } from '../actions/user';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  username: '',
  // contenu du champ password du formulaire de login
  password: '',
  // pseudo: '',
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
    case LOGIN:
      return {
        ...state,
      };
    case SAVE_DATA_USER:
      return {
        ...state,
        // pseudo: action.pseudo,
        logged: !state.logged,
      };
      case LOGOUT:
      return {
        ...state,
        // pseudo: action.pseudo,
        logged: !state.logged,
      };

    default:
      return state;
  }
};

export default reducer;
