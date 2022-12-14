import axios from 'axios';
import {
  FETCH_QUESTIONS, FETCH_QUESTIONS_LAST_FIVE,
  saveQuestions, saveLastFiveQuestions, resetLoader,
} from '../actions/questions';

const questionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      axios.get(
        'https://the-dev-corner.herokuapp.com/api/v1/questions',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveQuestions(response.data.questions));
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_QUESTIONS_LAST_FIVE:
      axios.get(
        'https://the-dev-corner.herokuapp.com/api/v1/last/questions',
        // {
        //   headers: {
        //     Authorization: `Bearer ${store.getState().user.token}`,
        //   },
        // },
      )
        .then((response) => {
          store.dispatch(saveLastFiveQuestions(response.data.questionRepository));
          // console.log(response.data.questions[0].user.pseudo);
          store.dispatch(resetLoader());
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
