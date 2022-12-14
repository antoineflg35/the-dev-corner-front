import { Message } from 'semantic-ui-react';
import {
  SAVE_EVENTS, UPDATE_FIELD_ADD_EVENTS, ADD_EVENT, SAVE_LAST_FIVE_EVENTS,
  SAVE_DEPARTMENT, UPDATE_ID_EVENTS,
  SAVE_ONE_EVENT_DETAILS, SUBSCRIBE_EVENTS,
  UNSUBSCRIBE_EVENTS, COUNT_PARTICIPANTS_EVENTS,
  WRONG_DATE_ADD_EVENTS,
  RESET_LOADER,
  CLEAN_RESPONSE,
} from '../actions/events';

const initialState = {
  list: [],
  detailsEvent: [],
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
  participate: localStorage.getItem('participe') === 'true',
  loader: false,
  loadingDetailsEvents: false,
  error: null,
  eventAdd: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        list: action.events,
        loader: true,
        loaderLastFive: false,
        loadingDetailsEvents: false,
      };
    case SAVE_LAST_FIVE_EVENTS:
      return {
        ...state,
        list: action.questions,
      };
    case SAVE_ONE_EVENT_DETAILS:
      
      return {
        ...state,
        detailsEvent: action.value,
        loadingDetailsEvents: true,
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
        eventAdd: true,

      };
    }
    case UPDATE_ID_EVENTS: {
      return {
        ...state,
        event_id: action.value,
      };
    }

    case SUBSCRIBE_EVENTS: {
      localStorage.setItem('participe', true);
      return {
        ...state,
        nb_participant: state.nb_participant + 1,
        participate: true,
      };
    }

    case UNSUBSCRIBE_EVENTS: {
      localStorage.setItem('participe', false);

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
    case WRONG_DATE_ADD_EVENTS: {
      return {
        ...state,
        error: action.message,
        eventAdd: false,
      };
    }
    case RESET_LOADER: {
      return {
        ...state,
        loader: false,
      };
    }
    case CLEAN_RESPONSE: {
      return {
        ...state,
        title: '',
        description: '',
        tag: '',
        department: '',
        adress: '',
        nb_participant_max: null,
        date: '',
        eventAdd: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
