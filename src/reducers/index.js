import { combineReducers } from 'redux';
import questionsReducer from './questions';
import userReducer from './user';
import newUserReducer from './newUser';
import responseReducer from './response';

const rootReducer = combineReducers({
  questions: questionsReducer,
  user: userReducer,
  newUser: newUserReducer,
  response: responseReducer,
});

export default rootReducer;
