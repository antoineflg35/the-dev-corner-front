// Actions types

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_QUESTIONS_LAST_FIVE = 'FETCH_QUESTIONS_LAST_FIVE';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const SAVE_LAST_FIVE_QUESTIONS = 'SAVE_LAST_FIVE_QUESTIONS';
export const UPDATE_FIELD_ADD_QUESTIONS = 'UPDATE_FIELD_ADD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
 
// Actions creators

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions: questions,
});

export const saveLastFiveQuestions = (questions) => ({
  type: SAVE_LAST_FIVE_QUESTIONS,
  questions: questions,
})

export const updateFieldAddQuestions = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_QUESTIONS,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const addQuestion = () => ({
  type: ADD_QUESTION,
});

export const fetchQuestionsLastFive = () => ({
  type: FETCH_QUESTIONS_LAST_FIVE,
});
