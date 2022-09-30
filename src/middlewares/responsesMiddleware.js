/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_RESPONSE, cleanResponse } from '../actions/response';

const responsesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_RESPONSE:
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
          console.log(response)
          // store.dispatch(cleanResponse());
        })
        .catch(console.log);
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default responsesMiddleware;
