import { enzyme } from 'enzyme';
import { addCongressmen, contentStatus, addSenators, getEducation, toggleSelected } from './index'

describe('actions', () => {
    it('should have a type of ADD_CONGRESSMEN', () => {
        const members = [{}];
        const expected = {
          type: 'ADD_CONGRESSMEN',
          members
        }
        const result = addCongressmen(members);
        expect(result).toEqual(expected);
      });

    it('should have a type of CONTENT_STATUS', () => {
        const status = '';
        const expected = {
          type: 'CONTENT_STATUS',
          status
        }
        const result = contentStatus(status);
        expect(result).toEqual(expected);
      });

      it('should have a type of ADD_SENATORS', () => {
        const senator = [{}];
        const expected = {
          type: 'ADD_SENATORS',
          senator
        }
        const result = addSenators(senator);
        expect(result).toEqual(expected);
      });

      it('should have a type of GET_EDUCATION', () => {
        const bills = [{}];
        const expected = {
          type: 'GET_EDUCATION',
          bills
        }
        const result = getEducation(bills);
        expect(result).toEqual(expected);
      });

      it('should have a type of TOGGLE_SELECTED', () => {
        const id = '';
        const expected = {
          type: 'TOGGLE_SELECTED',
          id
        }
        const result = toggleSelected(id);
        expect(result).toEqual(expected);
      });
})
