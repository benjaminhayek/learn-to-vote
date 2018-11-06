import { congressData, senateData, educationBills, senateEducationBills, memberData } from './dataCleaners';
import { comparePositions, compareSenators, getSponsors } from './ApiCals';

describe('dataCleaners', () => {
    it('should return a cleaned array of members', async () => {
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
    
        const result = await memberData()
        expect(result).toEqual(expected)
      })

      it.skip('should return a cleaned array of bills', async () => {
        const result = { results: {bills: {}} }
        window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(result)
          }))
        const expected = []
        const results = await educationBills()
        expect(results).toEqual(expected)
      })
})