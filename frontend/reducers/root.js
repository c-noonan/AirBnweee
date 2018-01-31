import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
