import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { congressmenReducer } from './congressmenReducer';
import { senatorReducer } from './senatorReducer';

export const rootReducer = combineReducers({
    loading: loadingReducer,
    congressmen: congressmenReducer,
    senators: senatorReducer,
  })