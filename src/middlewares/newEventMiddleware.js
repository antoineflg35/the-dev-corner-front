/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_EVENT, DISPLAY_LIST_DEPARTMENT, saveDepartment } from '../actions/events';

const newEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_EVENT:
      axios({
        method: 'post',
        url: 'http://localhost:8001/api/v1/events/add',
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
        })
        .catch((error) => {
          if (error.response) {
            // la requête a été faite et le code de réponse du serveur n’est pas dans
            // la plage 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          else if (error.request) {
            // la requête a été faite mais aucune réponse n’a été reçue
            // `error.request` est une instance de XMLHttpRequest dans le navigateur
            // et une instance de http.ClientRequest avec node.js
            console.log(error.request);
          }
          else {
            // quelque chose s’est passé lors de la construction de la requête et cela
            // a provoqué une erreur
            console.log('Error', error.message);
          }
          console.log(error.config);
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
