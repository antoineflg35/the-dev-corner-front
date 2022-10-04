import { UPDATE_FIELD_ADD_RESPONSES, ADD_RESPONSE, UPDATE_ID, CLEAN_RESPONSE } from '../actions/response';

const initialState = {
  // response: [],
  question_id: null,
  description: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD_ADD_RESPONSES:
      return {
        ...state,
        [action.fieldIdentifier]: action.value,
      };
    case ADD_RESPONSE: {
      return {
        ...state,
        question_id: state.question_id,
        description: state.description,
        
      };
    }
   
    case UPDATE_ID: {
      return {
        ...state,
        question_id: action.value,
      };
    }
    case CLEAN_RESPONSE: {
      return {
        ...state,
        description: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
