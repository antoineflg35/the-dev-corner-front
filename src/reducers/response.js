import { UPDATE_FIELD_ADD_RESPONSES, ADD_RESPONSE } from '../actions/response';

const initialState = {
  response: [],
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
      const newResponse = {
        id: 22,
        title: 'response',
        content: state.description,
        tag: 'React',
      };
      const responseCopy = [...state.response, newResponse];
      return {
        ...state,
        response: responseCopy,
      };
    }
    default:
      return state;
  }
};

export default reducer;
