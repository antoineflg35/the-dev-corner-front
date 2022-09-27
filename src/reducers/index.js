import { combineReducers } from 'redux';
import questionsReducer from './questions';
import userReducer from './user';

const rootReducer = combineReducers({
  questions: questionsReducer,
  user: userReducer,
});

export default rootReducer;
