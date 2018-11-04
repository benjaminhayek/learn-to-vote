import * as actions from '../actions';
import { combineReducers } from 'redux';
import { billsReducer } from './billsReducer';
import { congressmenReducer } from './congressmenReducer';
import { loadingReducer } from './loadingReducer';
import { senatorReducer } from './senatorReducer';

describe('billsReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = billsReducer(undefined, {});
        expect(result).toEqual(expected);
      });
    
      it('should update state with bills when getEducated is dispatched', () => {
        const initialState = [];
        const bills = [{title: 'Bill1'}, {title: 'Bill2'}];
        const expected = [...bills];
        const result = billsReducer(initialState, actions.getEducation(bills));
        expect(result).toEqual(expected);
      })
})