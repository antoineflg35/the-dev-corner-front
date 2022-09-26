import { SAVE_QUESTIONS } from '../actions/questions';

const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return {
        ...state,
        list: action.questions,
      };
    default:
      return state;
  }
};

export default reducer;
