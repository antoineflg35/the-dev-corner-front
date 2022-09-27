// Actions types

export const CHANGE_FIELD_NEW_LOGIN = 'CHANGE_FIELD_NEW_LOGIN';
export const DELETE_CHOICE_CHECKBOX = 'DELETE_CHOICE_CHECKBOX';
export const CREATE_COUNT = 'CREATE_COUNT';

// Actions creators

export const changeFieldNewLogin = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_NEW_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const deleteChoiceCheckbox = (newValue) => ({
  type: DELETE_CHOICE_CHECKBOX,
  newValue: newValue,
});

export const createCount = () => ({
  type: CREATE_COUNT,
});
