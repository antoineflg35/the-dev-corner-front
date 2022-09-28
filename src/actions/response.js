// Action Types
export const UPDATE_FIELD_ADD_RESPONSES = 'UPDATE_FIELD_ADD_RESPONSES';
export const ADD_RESPONSE = 'ADD_RESPONSE';

// Action creators
export const updateFieldAddResponses = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_RESPONSES,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});
export const addResponse = () => ({
  type: ADD_RESPONSE,
});
