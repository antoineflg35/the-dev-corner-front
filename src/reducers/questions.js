import { SAVE_QUESTIONS, UPDATE_FIELD_ADD_QUESTIONS, ADD_QUESTION } from '../actions/questions';

const initialState = {
  list: [],
  titleNewQuestion: '',
  descriptionNewQuestion: '',
  tagNewQuestion: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return {
        ...state,
        list: action.questions,
      };
    case UPDATE_FIELD_ADD_QUESTIONS:
      return {
        ...state,
        [action.fieldIdentifier]: action.value,
      };
    case ADD_QUESTION: {
      const newQuestion = {
        title: state.titleNewQuestion,
        description: state.descriptionNewQuestion,
        tag: state.tagNewQuestion,
      };
      const questionCopy = [...state.list, newQuestion];
      return {
        ...state,
        list: questionCopy,
      };
    }
    default:
      return state;
  }
};

export default reducer;
