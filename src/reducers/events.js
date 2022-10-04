import {
  SAVE_EVENTS, UPDATE_FIELD_ADD_EVENTS, ADD_EVENT, SAVE_LAST_FIVE_EVENTS, SAVE_DEPARTMENT, UPDATE_ID_EVENTS
} from '../actions/events';

const initialState = {
  list: [],
  titleNewEvent: '',
  descriptionNewEvent: '',
  tagNewEvent: '',
  adress: '',
  department_number: null,
  department_list: [],
  nb_participant_max: null,
  date: '',
  event_id: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        list: action.events,
      };
    case SAVE_LAST_FIVE_EVENTS:
      return {
        ...state,
        list: action.questions,
      };
    case UPDATE_FIELD_ADD_EVENTS:
      return {
        ...state,
        [action.fieldIdentifier]: action.value,
      };
    case SAVE_DEPARTMENT:
      return {
        ...state,
        department_list: action.value,
      };
    case ADD_EVENT: {
      const newEvent = {
        title: state.titleNewEvent,
        description: state.descriptionNewEvent,
        tag: state.tagNewEvent,
        department: state.department,
        adress: state.adress,
        nb_participant_max: state.nb_participant_max,
        date: state.date,
      };
      const eventCopy = [...state.list, newEvent];
      return {
        ...state,
        list: eventCopy,
      };
    }
    case UPDATE_ID_EVENTS: {
      return {
        ...state,
        event_id: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
