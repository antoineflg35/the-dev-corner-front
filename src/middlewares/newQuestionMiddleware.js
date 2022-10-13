/* eslint-disable no-case-declarations */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ADD_QUESTION, fetchQuestions } from '../actions/questions';

const addQuestionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_QUESTION:
      axios({
        method: 'post',
        url: 'https://the-dev-corner.herokuapp.com/api/v1/questions/add',
        data: {
          title: store.getState().questions.titleNewQuestion,
          description: store.getState().questions.descriptionNewQuestion,
          departement_number: store.getState().user.department_user,
          tag: Array(store.getState().questions.tagNewQuestion),
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
      // const config = {
      //   headers: { Authorization: `Bearer ${store.getState().user.token}` },
      // };
      // const bodyParameters = {
      //   title: store.getState().questions.titleNewQuestion,
      //   description: store.getState().questions.descriptionNewQuestion,
      //   tag: store.getState().questions.tagNewQuestion,
      // };
      // axios.post(
      //   'http://localhost:8001/api/v1/questions/add',
      //   bodyParameters,
      //   config,
      // )
        .then((response) => {
          store.dispatch(fetchQuestions());
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
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default addQuestionMiddleware;
