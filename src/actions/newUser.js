// Actions types

export const CHANGE_FIELD_NEW_LOGIN = 'CHANGE_FIELD_NEW_LOGIN';
export const CREATE_COUNT = 'CREATE_COUNT';

// Actions creators

export const changeFieldNewLogin = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_NEW_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const createCount = () => ({
  type: CREATE_COUNT,
});
