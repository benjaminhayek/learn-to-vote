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

describe('congressmenReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = congressmenReducer(undefined, {});
        expect(result).toEqual(expected);
      });
    
      it('should update state with bills when addCongressmen is dispatched', () => {
        const initialState = [];
        const congressmen = [{name: 'Ted', id: 1, party: 'D', title: 'Representative', nextElection: '2018', selected: false}, {name: 'Jan', id: 2, party: 'R', title: 'Representative', nextElection: '2018', selected: false}];
        const expected = [...congressmen];
        const result = congressmenReducer(initialState, actions.addCongressmen(congressmen));
        expect(result).toEqual(expected);
      })

      it('should toggle selected when toggle selected is dispatched', () => {
        const initialState = [false];
        const expected = [false];
        const result = congressmenReducer(initialState, actions.toggleSelected({id:1, selected: false}))
        expect(result).toEqual(expected)
      })
})

describe('senatorReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = senatorReducer(undefined, {});
        expect(result).toEqual(expected);
      });
    
      it('should update state with bills when addCongressmen is dispatched', () => {
        const initialState = [];
        const senator = [{name: 'Bill', id: 3, party: 'D', title: 'Senator', nextElection: '2020', selected: false}, {name: 'Sue', id: 4, party: 'R', title: 'Senator', nextElection: '2020', selected: false}];
        const expected = [...senator];
        const result = senatorReducer(initialState, actions.addSenators(senator));
        expect(result).toEqual(expected);
      })

      it('should toggle selected when toggle selected is dispatched', () => {
        const initialState = [false];
        const expected = [false];
        const result = senatorReducer(initialState, actions.toggleSelected({id:1, selected: true}))
        expect(result).toEqual(expected)
      })
})

describe('loadingReducer', () => {
    it('should return the initialState', () => {
      const expected = '';
      const result = loadingReducer(undefined, '');
      expect(result).toEqual(expected);
    })
  
    it('should update with a new status when loadingReducer is dispatched', () => {
      const initialState = '';
      const status = 'loading';
      const expected = 'loading';
      const result = loadingReducer(initialState, actions.contentStatus(status));
      expect(result).toEqual(expected);
    });
  })