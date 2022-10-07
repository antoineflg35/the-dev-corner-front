// Actions types

export const UPDATE_FIELD_LOGIN = 'UPDATE_FIELD_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const SAVE_USER_PSEUDO = 'SAVE_USER_PSEUDO';
export const FETCH_LIST_TAG = 'FETCH_LIST_TAG';
export const SAVE_LIST_TAG = 'SAVE_LIST_TAG';


// Actions creators

export const updateFieldLogin = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const login = () => ({
  type: LOGIN,
});

export const loginToken = () => ({
  type: LOGIN_TOKEN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUserToken = (token) => ({
  type: SAVE_USER_TOKEN,
  token: token,
});

export const saveUserPseudo = (pseudo) => ({
  type: SAVE_USER_PSEUDO,
  pseudo: pseudo,
});
