/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_RESPONSE, cleanResponse } from '../actions/response';

const responsesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      // axios.post(
      //   'http://localhost:8001/api/v1/responses/add',
      //   {
      //     headers: {
      //       Authorization: `bearer ${store.getState().user.token}`,
      //     },
      //   },
      //   {
      //     // on utilise les infos du formulaire : on les récupère dans le state
      //     // (champs contrôlés). Attention un middleware n'est pas un composant
      //     // React, donc on ne peut pas utiliser les hooks (useSelector, useDispatch)
      //     // => store.getState()
      //     id: store.getState().response.response.id,
      //     description: store.getState().response.response.description,
      //   },
      // )
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     console.log(`bearer ${store.getState().user.token}`);
      //   });
      const config = {
        headers: { Authorization: `Bearer ${store.getState().user.token}` },
      };
      const bodyParameters = {
        question_id: store.getState().response.question_id,
        description: store.getState().response.description,
      };

      axios.post(
        'http://localhost:8001/api/v1/responses/add',
        bodyParameters,
        config,
      )
        .then((response) => {
          store.dispatch(cleanResponse);
        })
        .catch(console.log);
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default responsesMiddleware;
