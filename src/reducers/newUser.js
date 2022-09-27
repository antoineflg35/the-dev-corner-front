import { CHANGE_FIELD_NEW_LOGIN } from '../actions/newUser';

// eslint-disable-next-line import/prefer-default-export
const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  name: '',
  surname: '',
  description: '',
  department: '',
  // tagCheked: false,
  tag: '',
};

const reducer = (state = initialState, action = {}) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_FIELD_NEW_LOGIN:
      // si le champ concerné par le changement est celui de l'e-mail
      switch (action.fieldIdentifier) {
        case 'email':
          return {
            ...state,
            email: action.value,
          };
        case 'password':
          return {
            ...state,
            password: action.value,
          };
        case 'name':
          return {
            ...state,
            name: action.value,
          };
        case 'surname':
          return {
            ...state,
            surname: action.value,
          };
        case 'description':
          return {
            ...state,
            description: action.value,
          };
        case 'department':
          return {
            ...state,
            department: action.value,
          };
        case 'tag':
          return {
            ...state,
            tag: action.value,

          };
        default:
          
      }
    default:
      return state;
  }
};

export default reducer;
