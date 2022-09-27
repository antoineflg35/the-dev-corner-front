import { CHANGE_FIELD_NEW_LOGIN, DELETE_CHOICE_CHECKBOX, TOGGLE_CHECKBOX_NEW_LOGIN } from '../actions/newUser';

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
  php: false,
  js: false,
  tag: [],
};

const reducer = (state = initialState, action = {}) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_FIELD_NEW_LOGIN:
      return {
        ...state,
        // Accesseurs de propriétés
        [action.fieldIdentifier]: action.value,
      };

    case TOGGLE_CHECKBOX_NEW_LOGIN: {
      console.log(action.value, action.fieldIdentifier);
      // Creation d'un nouveau tableau
      let newTag = [];
      // Creation d'une condition
      // Si le tag est inclus dans le tableau Tag
      // alors tu le supprime
      // Sinon tu l'ajoute au tableau newtag
      if (state.tag.includes(action.fieldIdentifier)) {
        newTag = [...state.tag].filter((tag) => tag !== action.fieldIdentifier);
      }
      else {
        newTag = [...state.tag, action.fieldIdentifier];
      }
      // Ensuite tu retournes le state + la variable d'état tag qui comprends le tableau newTag
      return {
        ...state,
        [action.fieldIdentifier]: action.value,
        tag: newTag,
      };
    }

    // si le champ concerné par le changement est celui de l'e-mail
    // switch (action.fieldIdentifier) {
    //   case 'email':
    //     return {
    //       ...state,
    //       email: action.value,
    //     };
    //   case 'password':
    //     return {
    //       ...state,
    //       password: action.value,
    //     };
    //   case 'name':
    //     return {
    //       ...state,
    //       name: action.value,
    //     };
    //   case 'surname':
    //     return {
    //       ...state,
    //       surname: action.value,
    //     };
    //   case 'description':
    //     return {
    //       ...state,
    //       description: action.value,
    //     };
    //   case 'department':
    //     return {
    //       ...state,
    //       department: action.value,
    //     };
    //   case 'tag':
    //     return {
    //       ...state,
    //       tag: [...state.tag, action.value],
    //     };
    //   case 'php':
    //     return {
    //       ...state,
    //       php: action.value,

    //     };
    //   case 'js':
    //     return {
    //       ...state,
    //       js: action.value,

    //     };
    //   default:
    // }
    // break;
    // case DELETE_CHOICE_CHECKBOX:
    //   // const existInArray = [...state.tag].includes(action.newValue);
    //   // let newTagArray = [];
    //   // if (existInArray) {
    //   //   newTagArray = [...state.tag].filter((tag) => tag !== action.newValue);
    //   // }
    //   // else {
    //   //   newTagArray = [...state.tag, action.newValue];
    //   // }
    //   return {
    //     tag: [...state.tag].filter((tag) => tag !== action.newValue),
    //   };
    default:
      return state;
  }
};

export default reducer;
