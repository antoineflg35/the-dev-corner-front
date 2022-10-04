import axios from 'axios';
import {
  FETCH_EVENTS, FETCH_EVENTS_LAST_FIVE, DISPLAY_EVENT_DETAILS, saveEvents, saveLastFiveEvents, saveOneEventDetails
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      axios.get(
        'http://localhost:8001/api/v1/events',
        {
          headers: {
            Authorization: `bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveEvents(response.data.eventRepository));
          // console.log(response.data.questions[0].user.pseudo);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_LAST_FIVE:
      axios.get(
        'http://localhost:8001/api/v1/last/events',
      )
        .then((response) => {
          store.dispatch(saveLastFiveEvents(response.data.eventRepository));
          // console.log(response.data.questions[0].user.pseudo);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case DISPLAY_EVENT_DETAILS:
      axios.get(
        `http://localhost:8001/api/v1/events/${store.getState().events.event_id}`,
        {
          headers: {
            Authorization: `bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveOneEventDetails(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default eventsMiddleware;
