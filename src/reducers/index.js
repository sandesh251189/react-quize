import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import GetUserReducer from './user_reducer'
import Questions from './question_reducer'
const rootReducer = combineReducers({
  userdetails:GetUserReducer,
  questions:Questions,
  form:formReducer
});
export default rootReducer;
