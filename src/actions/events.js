// Actions types

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const UPDATE_FIELD_ADD_EVENTS = 'UPDATE_FIELD_ADD_EVENTS';
export const ADD_EVENT= 'ADD_EVENT';
export const FETCH_EVENTS_LAST_FIVE = 'FETCH_EVENTS_LAST_FIVE';
export const SAVE_LAST_FIVE_EVENTS = 'SAVE_LAST_FIVE_EVENTS';
export const DISPLAY_EVENT_DETAILS = 'DISPLAY_EVENT_DETAILS';
export const SAVE_ONE_EVENT_DETAILS = 'SAVE_ONE_EVENT_DETAILS';
export const DISPLAY_LIST_DEPARTMENT = 'DISPLAY_LIST_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTMENT';
export const UPDATE_ID_EVENTS = 'UPDATE_ID_EVENTS';
export const SUBSCRIBE_EVENTS = 'SUBSCRIBE_EVENTS';
export const UNSUBSCRIBE_EVENTS = 'UNSUBSCRIBE_EVENTS';


// Actions creators

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events: events,
  
});

export const fetchEventsLastFive = (responses) => ({
  type: FETCH_EVENTS_LAST_FIVE,
  value: responses,
});

export const saveLastFiveEvents = (events) => ({
  type: SAVE_LAST_FIVE_EVENTS,
  questions: events,
});

export const updateFieldAddEvents = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_EVENTS,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const addEvent= () => ({
  type: ADD_EVENT,
});

export const displayEventDetails = () => ({
  type: DISPLAY_EVENT_DETAILS,
});

export const saveOneEventDetails = (event) => ({
  type: SAVE_ONE_EVENT_DETAILS,
  value: event,
});

export const displayListDepartment = () => ({
  type: DISPLAY_LIST_DEPARTMENT,
});

export const saveDepartment = (department) => ({
  type: SAVE_DEPARTMENT,
  value: department,
});

export const updateIdEvents = (id) =>({
  type: UPDATE_ID_EVENTS,
  value: id,
});

export const subscribeEvents = () => ({
  type: SUBSCRIBE_EVENTS,
});

export const unSubscribeEvents = () => ({
  type: UNSUBSCRIBE_EVENTS,

});
