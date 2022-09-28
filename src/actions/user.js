// Actions types

export const UPDATE_FIELD_LOGIN = 'UPDATE_FIELD_LOGIN';
export const LOGIN = 'LOGIN';


// Actions creators

export const updateFieldLogin = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const login = () => ({
  type: LOGIN,
});
