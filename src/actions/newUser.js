// Actions types

export const CHANGE_FIELD_NEW_LOGIN = 'CHANGE_FIELD_NEW_LOGIN';
export const TOGGLE_CHECKBOX_NEW_LOGIN = 'TOGGLE_CHECKBOX_NEW_LOGIN';
export const DELETE_CHOICE_CHECKBOX = 'DELETE_CHOICE_CHECKBOX';
export const CREATE_COUNT = 'CREATE_COUNT';
export const DISPLAY_LIST_DEPARTMENT = 'DISPLAY_LIST_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTMENT';
export const FETCH_LIST_TAG = 'FETCH_LIST_TAG';
export const SAVE_LIST_TAG = 'SAVE_LIST_TAG';
export const WRONG_VERIFICATION_PASSWORD = 'WRONG_VERIFICATION_PASSWORD';

// Actions creators

export const changeFieldNewLogin = (newValue, fieldIdentifier) => ({
  type: CHANGE_FIELD_NEW_LOGIN,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const toggleCheckboxNewLogin = (newValue, fieldIdentifier) => ({
  type: TOGGLE_CHECKBOX_NEW_LOGIN,
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

export const displayListDepartment = () => ({
  type: DISPLAY_LIST_DEPARTMENT,
});

export const saveDepartment = (department) => ({
  type: SAVE_DEPARTMENT,
  value: department,
});

export const fetchListTag = () => ({
  type: FETCH_LIST_TAG,
});

export const saveListTag = (tag) => ({
  type: SAVE_LIST_TAG,
  tag: tag,
});

export const wrongVerificationPassword = () => ({
  type: WRONG_VERIFICATION_PASSWORD,
});
