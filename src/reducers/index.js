import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { congressmenReducer } from './congressmenReducer';
import { senatorReducer } from './senatorReducer';
import { billsReducer } from './billsReducer';

export const rootReducer = combineReducers({
    loading: loadingReducer,
    congressmen: congressmenReducer,
    senators: senatorReducer,
    bills: billsReducer,
  })