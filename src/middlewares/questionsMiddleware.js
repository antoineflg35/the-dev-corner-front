import axios from 'axios';
import { FETCH_QUESTIONS, saveQuestions } from '../actions/questions';

const questionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      axios.get(
        'http://localhost:8001/api/v1/questions',
        {
          headers: {
            Authorization: `bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          // conseil : vérifier qu'on cible bien les infos dans la réponse
          // avec un console.log avant d'écrire le dispatch
          // console.log(response);
          store.dispatch(saveQuestions(response.data.questions));
          console.log(response.data.questions[0].user.pseudo);
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
export default questionsMiddleware;
