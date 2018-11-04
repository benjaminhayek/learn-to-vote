import { congressData, senateData, educationBills, senateEducationBills } from './dataCleaners';

describe('dataCleaners', () => {
    it('should return a cleaned array of congressmen', async () => {
        const data = {
            results: [{
            'name': 'Bill',
            'party': 'D',
            'title': 'representative',
            'id': 1,
            'nextElection': '2010',
            'selected': false 
          }]
        }
    
        window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(data)
        }))

        const expected = [{"id": 1, "name": "Bill", "nextElection": undefined, "party": "D", "selected": false, "title": undefined}]
    
        const result = await congressData()
        expect(result).toEqual(expected)
      })

      it('should return a cleaned array of senators', async () => {
        const data = {
            results: [{
            'name': 'Bill',
            'party': 'D',
            'title': 'representative',
            'id': 1,
            'nextElection': '2010',
            'selected': false 
          }]
        }
    
        window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(data)
        }))

        const expected = [{"id": 1, "name": "Bill", "nextElection": undefined, "party": "D", "selected": false, "title": undefined}]
    
        const result = await senateData()
        expect(result).toEqual(expected)
      })
})