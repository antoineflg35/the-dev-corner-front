/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_RESPONSE, cleanResponse } from '../actions/response';
import { fetchQuestions } from '../actions/questions';

const responsesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      axios({
        method: 'post',
        url: 'https://the-dev-corner.herokuapp.com/api/v1/responses/add',
        data: {
          question_id: store.getState().response.question_id,
          description: store.getState().response.description,
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchQuestions());
          store.dispatch(cleanResponse());
        })
        .catch(console.log);
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default responsesMiddleware;
