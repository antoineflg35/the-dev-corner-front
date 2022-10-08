import {
  SAVE_EVENTS, UPDATE_FIELD_ADD_EVENTS, ADD_EVENT, SAVE_LAST_FIVE_EVENTS,
  SAVE_DEPARTMENT, UPDATE_ID_EVENTS, SAVE_ONE_EVENT_DETAILS, SUBSCRIBE_EVENTS, UNSUBSCRIBE_EVENTS, COUNT_PARTICIPANTS_EVENTS
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
  nb_participant: null,
  date: '',
  event_id: null,
  participate: localStorage.getItem('participe'),
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
    case SAVE_ONE_EVENT_DETAILS:
      return {
        ...state,
        list: action.value,
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
    case SUBSCRIBE_EVENTS: {
      localStorage.setItem('participe',true);
      return {
        ...state,
        nb_participant: state.nb_participant + 1,
        participate: true,
      };
    }
    case UNSUBSCRIBE_EVENTS: {
      localStorage.setItem('participe',false);

      return {
        ...state,
        nb_participant: state.nb_participant - 1,
        participate: false,
      };
    }
    case COUNT_PARTICIPANTS_EVENTS: {
      return {
        ...state,
        nb_participant: action.participants,
      };
    }
    default:
      return state;
  }
};

export default reducer;
