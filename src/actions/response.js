// Action Types
export const UPDATE_FIELD_ADD_RESPONSES = 'UPDATE_FIELD_ADD_RESPONSES';
export const ADD_RESPONSE = 'ADD_RESPONSE';
export const CLEAN_RESPONSE = 'CLEAN_RESPONSE';
// export const FETCH_RESPONSE = 'FETCH_RESPONSE';
export const UPDATE_ID = 'UPDATE_ID';
export const UPDATE_RESPONSE='UPDATE_RESPONSE';


// Action creators
export const updateFieldAddResponses = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_RESPONSES,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const addResponse = () => ({
  type: ADD_RESPONSE,
});

export const cleanResponse = () => ({
  type: CLEAN_RESPONSE,
});

export const updateId = (id) =>({
  type: UPDATE_ID,
  value: id,
});

// export const updateResponse = ()=>({
//   type:UPDATE_RESPONSE,
// });

// export const fetchResponse = ()=>({
//   type: FETCH_RESPONSE,
// });
