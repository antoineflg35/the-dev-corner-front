import {
  SAVE_EVENTS, UPDATE_FIELD_ADD_EVENTS, ADD_EVENT, SAVE_LAST_FIVE_EVENTS,
} from '../actions/events';

const initialState = {
  list: [],
  titleNewEvent: '',
  descriptionNewEvent: '',
  tagNewEvent: '',
  department: '',
  nb_participant_max: null,
  date: '',
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
    case ADD_EVENT: {
      const newEvent = {
        titleNewEvent: state.titleNewEvent,
        descriptionNewEvent: state.descriptionNewEvent,
        tagNewEvent: state.tagNewEvent,
      };
      const eventCopy = [...state.list, newEvent];
      return {
        ...state,
        list: eventCopy,
      };
    }
    default:
      return state;
  }
};

export default reducer;
