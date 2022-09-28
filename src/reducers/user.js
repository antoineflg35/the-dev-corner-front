import { UPDATE_FIELD_LOGIN, LOGIN } from '../actions/user';

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD_LOGIN:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'email') {
        return {
          ...state,
          email: action.value,
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

    default:
      return state;
  }
};

export default reducer;
