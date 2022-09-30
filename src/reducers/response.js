import { UPDATE_FIELD_ADD_RESPONSES, ADD_RESPONSE, CLEAN_RESPONSE } from '../actions/response';

const initialState = {
  // response: [],
  question_id: '',
  description: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD_ADD_RESPONSES:
      return {
        ...state,
        [action.fieldIdentifier]: action.value,
      };
    // case ADD_RESPONSE: {
    //   const newResponse = {
    //     question_id: action.value,
    //     description: state.description,
    //   };
    //   const responseCopy = [...state.response, newResponse];
    //   return {
    //     ...state,
    //     response: responseCopy,
    //   };
    // }
    case ADD_RESPONSE: {
      return {
        ...state,
        question_id: action.value,
        description: state.description,
      };
    }
    case CLEAN_RESPONSE: {
      return {
        ...state,
        question_id: null,
        description: '',
        
      };
    }
    default:
      return state;
  }
};

export default reducer;
