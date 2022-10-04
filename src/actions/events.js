// Actions types

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const UPDATE_FIELD_ADD_EVENTS = 'UPDATE_FIELD_ADD_EVENTS';
export const ADD_EVENT= 'ADD_EVENT';
export const FETCH_EVENTS_LAST_FIVE = 'FETCH_EVENTS_LAST_FIVE';
export const SAVE_LAST_FIVE_EVENTS = 'SAVE_LAST_FIVE_EVENTS';
 
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
})

export const updateFieldAddEvents = (newValue, fieldIdentifier) => ({
  type: UPDATE_FIELD_ADD_EVENTS,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const addEvent= () => ({
  type: ADD_EVENT,
});



