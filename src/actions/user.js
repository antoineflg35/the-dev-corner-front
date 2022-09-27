export const UPDATE_FIELD_LOGIN = 'UPDATE_FIELD_LOGIN';

export const updateFieldLogin = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});
