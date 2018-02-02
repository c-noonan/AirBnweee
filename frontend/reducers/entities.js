import { combineReducers } from 'redux';
import spotsReducer from './spots';

const entitiesReducer = combineReducers({
  spots: spotsReducer
});

export default entitiesReducer;
