// Action Types
export const UPDATE_FIELD_ADD_RESPONSES = 'UPDATE_FIELD_ADD_RESPONSES';
export const ADD_RESPONSE = 'ADD_RESPONSE';
export const CLEAN_RESPONSE = 'CLEAN_RESPONSE';
// export const FETCH_RESPONSE = 'FETCH_RESPONSE';

// Action creators
export const updateFieldAddResponses = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_RESPONSES,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});
export const addResponse = (id) => ({
  type: ADD_RESPONSE,
  value: id,
});
export const cleanResponse = () => ({
  type: CLEAN_RESPONSE,
});

// export const fetchResponse = ()=>({
//   type: FETCH_RESPONSE,
// });
