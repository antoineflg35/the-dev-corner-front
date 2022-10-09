import axios from 'axios';
import {
  FETCH_EVENTS, FETCH_EVENTS_LAST_FIVE,
  DISPLAY_EVENT_DETAILS, saveEvents, saveLastFiveEvents, 
  saveOneEventDetails, SUBSCRIBE_EVENTS, UNSUBSCRIBE_EVENTS, FETCH_PARTICIPANTS_EVENTS,
  countParticipantsEvents,
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
          console.log(response.data)
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
    case SUBSCRIBE_EVENTS:
      axios({
        method: 'post',
        url: `http://localhost:8001/api/v1/register/events/${store.getState().events.event_id}`,
        headers: {
          // 'Content-Type': 'application/json; charset=utf-8',
          Authorization: `bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case UNSUBSCRIBE_EVENTS:
      axios({
        method: 'delete',
        url: `http://localhost:8001/api/v1/unsubscribe/events/${store.getState().events.event_id}`,
        headers: {
          // 'Content-Type': 'application/json; charset=utf-8',
          Authorization: `bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
      case FETCH_PARTICIPANTS_EVENTS:
      axios({
        method: 'get',
        url: `http://localhost:8001/api/v1/users/participate/event/${store.getState().events.event_id}`,
        headers: {
          // 'Content-Type': 'application/json; charset=utf-8',
          Authorization: `bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          const nbparticipe = response.data.users_participate;
          console.log(nbparticipe);
         const participants = nbparticipe.length;
          store.dispatch(countParticipantsEvents(participants));
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
