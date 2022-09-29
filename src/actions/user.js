// Actions types

export const UPDATE_FIELD_LOGIN = 'UPDATE_FIELD_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_DATA_USER = 'SAVE_DATA_USER';


// Actions creators

export const updateFieldLogin = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveDataUser = (pseudo, token) => ({
  type: SAVE_DATA_USER,
  pseudo: pseudo,
  token: token,
});
