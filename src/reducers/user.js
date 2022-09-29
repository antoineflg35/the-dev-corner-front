import { UPDATE_FIELD_LOGIN, SAVE_DATA_USER, LOGOUT } from '../actions/user';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  username: '',
  // contenu du champ password du formulaire de login
  password: '',
  pseudo: '',
  token: '',
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
    
    case SAVE_DATA_USER:
      return {
        ...state,
        pseudo: action.pseudo,
        logged: true,
        token: action.token,
        username: '',
        password: '',
      };
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
