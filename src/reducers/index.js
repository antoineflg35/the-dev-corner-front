import { combineReducers } from 'redux';
import questionsReducer from './questions';
import userReducer from './user';
import newUserReducer from './newUser';

const rootReducer = combineReducers({
  questions: questionsReducer,
  user: userReducer,
  newUser: newUserReducer,
});

export default rootReducer;
