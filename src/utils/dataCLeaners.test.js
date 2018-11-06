import { congressData, senateData, educationBills, senateEducationBills } from './dataCleaners';
import { comparePositions, compareSenators, getSponsors } from './ApiCals';

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

      it('should return a cleaned array of bills', async () => {
        const result = { results: [{bills: [{
            committees: "House Oversight and Government Reform Committee",
            title: "Recognizing the significance of Equal Pay Day to illustrate the disparity between wages paid to men and women.",
            url: "https://www.congress.gov/bill/115th-congress/house-concurrent-resolution/44"}]}]}
        window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(result)
          }))
        const expected = []
        const results = await educationBills()
        expect(results).toEqual(expected)
      })

      it('should return a cleaned array of bills', async () => {
        const result = { results: [{bills: [{
            committees: "House Oversight and Government Reform Committee",
            title: "Recognizing the significance of Equal Pay Day to illustrate the disparity between wages paid to men and women.",
            url: "https://www.congress.gov/bill/115th-congress/house-concurrent-resolution/44"}]}]}
        window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(result)
          }))
        const expected = []
        const results = await senateEducationBills()
        expect(results).toEqual(expected)
      })
})