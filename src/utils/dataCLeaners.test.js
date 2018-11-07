import { educationBills, memberData } from './dataCleaners';
import * as API from './ApiCals.js';
import { key } from './ApiKey'

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

      it('should call compare positions with the correct params', async () => {
        const result = { results: {bills: {}} }
        let comparePositions = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({
              bills: [result]
          })
        }))
        await comparePositions(result)
        expect(comparePositions).toBeCalledWith({"results": {"bills": {}}})
      })

      it('should call get sponsors with the correct api', async () => {
        const expected = "https://api.propublica.org/congress/v1/members/G000575.json"
        let getSponsors =  jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(result)
          }))
        await getSponsors(expected)
        expect(getSponsors).toBeCalledWith(expected)
      })

      it('should call get postion with an id', async () => {
        const expected = "ASJD9SD"
       let getPosition =  jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(result)
        }))
        await getPosition(expected)
        expect(getPosition).toBeCalledWith(expected)
      })
})