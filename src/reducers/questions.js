import {
  SAVE_QUESTIONS, SAVE_LAST_FIVE_QUESTIONS, UPDATE_FIELD_ADD_QUESTIONS,
  ADD_QUESTION,
} from '../actions/questions';
// import {
//   UPDATE_RESPONSE,
// } from '../actions/response';

const initialState = {
  list: [],
  titleNewQuestion: '',
  descriptionNewQuestion: '',
  tagNewQuestion: [],
  questionCreated: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return {
        ...state,
        list: action.questions,
      };
    case SAVE_LAST_FIVE_QUESTIONS:
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
        questionCreated: true,

      };
    }
    default:
      return state;
  }
};

export default reducer;
