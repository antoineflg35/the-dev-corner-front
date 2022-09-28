// Actions types

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const UPDATE_FIELD_ADD_QUESTIONS = 'UPDATE_FIELD_ADD_QUESTIONS';

// Actions creators

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions: questions,
});

export const updateFieldAddQuestions = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_QUESTIONS,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});
