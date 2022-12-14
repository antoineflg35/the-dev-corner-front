import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import questionsMiddleware from '../middlewares/questionsMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import newUserMiddleware from '../middlewares/newUserMiddleware';
import responsesMiddleware from '../middlewares/responsesMiddleware';
import addQuestionMiddleware from '../middlewares/newQuestionMiddleware';
import eventsMiddleware from '../middlewares/eventsMiddleware';
import newEventMiddleware from '../middlewares/newEventMiddleware';

// pour que le redux dev tool puisse voir notre store
// autre possibilit√© : ajouter redux-devtools-extension √† notre projet
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    questionsMiddleware,
    authMiddleware,
    newUserMiddleware,
    responsesMiddleware,
    addQuestionMiddleware,
    eventsMiddleware,
    newEventMiddleware
  ),
);

const store = createStore(reducer, enhancers);

export default store;
