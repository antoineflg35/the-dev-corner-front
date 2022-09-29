import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import questionsMiddleware from '../middlewares/questionsMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import newUserMiddleware from '../middlewares/newUserMiddleware';

// pour que le redux dev tool puisse voir notre store
// autre possibilité : ajouter redux-devtools-extension à notre projet
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    questionsMiddleware,
    authMiddleware,
    newUserMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
