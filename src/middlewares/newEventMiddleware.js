/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_EVENT, DISPLAY_LIST_DEPARTMENT, fetchEvents, saveDepartment, wrongDateAddEvents, cleanResponse } from '../actions/events';

const newEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_EVENT:
      axios({
        method: 'post',
        url: 'https://the-dev-corner.herokuapp.com/api/v1/events/add',
        data: {
          title: store.getState().events.titleNewEvent,
          description: store.getState().events.descriptionNewEvent,
          adress: store.getState().events.adress,
          departement_number: store.getState().events.department_number,
          nb_participant_max: store.getState().events.nb_participant_max,
          date: store.getState().events.date,
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(fetchEvents());
        })
        .catch((error) => {
          if (error.response.status === 422) {
            // la requête a été faite et le code de réponse du serveur n’est pas dans
            // la plage 2xx
            const errorMessage = (error.response.data.date[0]);
            store.dispatch(wrongDateAddEvents(errorMessage));
          }
        });
      break;
    case DISPLAY_LIST_DEPARTMENT:
      axios.get(
        'https://geo.api.gouv.fr/departements',
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveDepartment(response.data));
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
export default newEventMiddleware;
