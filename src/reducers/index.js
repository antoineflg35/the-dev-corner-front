import { combineReducers } from 'redux';
import questionsReducer from './questions';
import userReducer from './user';
import newUserReducer from './newUser';
import responseReducer from './response';
import eventsReducer from './events';

const rootReducer = combineReducers({
  questions: questionsReducer,
  user: userReducer,
  newUser: newUserReducer,
  response: responseReducer,
  events:eventsReducer,
});

export default rootReducer;
