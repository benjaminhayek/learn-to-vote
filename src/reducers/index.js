import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { congressmenReducer } from './congressmenReducer';

export const rootReducer = combineReducers({
    loading: loadingReducer,
    congressmen: congressmenReducer
  })