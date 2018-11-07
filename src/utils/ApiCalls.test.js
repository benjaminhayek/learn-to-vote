import { getPosition, getMembers, getState, educationBills, comparePositions, compareSenators, getSponsors } from './ApiCals';
import { key } from './ApiKey'

describe('API', () => {
    it('calls fetch with the correct params', () => {
        const state = 'http://gd.geobytes.com/GetCityDetails?callback='
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                congressmen: []
            })
          }))
        const url = "http://gd.geobytes.com/GetCityDetails?callback=";
    
        const expected = url

        getMembers(state);
        expect(window.fetch).toHaveBeenCalledWith(expected);
      });

      it('throw an error if status is not ok', async () => {
        const expected = Error('')
          window.fetch = jest.fn().mockImplementation(() => ({
          status: 500,
            json: () => Promise.reject({congressmen: []})
          }))
        await expect(getMembers()).rejects.toEqual(expected)
        })

      it('calls fetch with the correct params', () => {
        const url = 'http://gd.geobytes.com/GetCityDetails?callback='
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                state: ''
            })
          }))
    
        const expected = url

        getState();
        expect(window.fetch).toHaveBeenCalledWith(expected);
      });

      it('throw an error if status is not ok', async () => {
        const expected = Error('')
          window.fetch = jest.fn().mockImplementation(() => ({
          status: 500,
            json: () => Promise.reject({state: ''})
          }))
        await expect(getState()).rejects.toEqual(expected)
        })

      it('calls fetch with the correct params', () => {
        const url = "https://api.propublica.org/congress/v1/members/undefined/bills/undefined/115/undefined.json"
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                bills: []
            })
          }))
    
          const expected = [ 
            url, {
              headers: {
                'X-API-Key': key
              }
            }
          ]

        comparePositions();
        expect(window.fetch).toHaveBeenCalledWith(...expected);
      });

      it('throw an error if status is not ok', async () => {
        const expected = Error('')
          window.fetch = jest.fn().mockImplementation(() => ({
          status: 500,
            json: () => Promise.reject({bills: []})
          }))
        await expect(comparePositions()).rejects.toEqual(expected)
        })

      it('calls fetch with the correct params', async () => {
        const parameter = [{congressdotgov_url: "https://www.congress.gov/bill/115th-congress/house-bill/1847"}]
        const url = "https://api.propublica.org/congress/v1/115/bills/hres30.json"
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({
              results: parameter
          })
        }))
    
          const expected = [ 
            url, {
              headers: {
                'X-API-Key': key
              }
            }
          ]

        getSponsors(url);
        expect(window.fetch).toHaveBeenCalledWith(...expected);
      });

      it('throw an error if status is not ok', async () => {
        const expected = Error('')
          window.fetch = jest.fn().mockImplementation(() => ({
          status: 500,
            json: () => Promise.reject({results: []})
          }))
        await expect(getSponsors()).rejects.toEqual(expected)
        })

      it('calls fetch with the correct params', () => {
        const url = "https://api.propublica.org/congress/v1/members/undefined/votes.json"
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                bills: []
            })
          }))
    
          const expected = [ 
            url, {
              headers: {
                'X-API-Key': key
              }
            }
          ]

        getPosition();
        expect(window.fetch).toHaveBeenCalledWith(...expected);
      });

      it('throw an error if status is not ok', async () => {
        const expected = Error('')
          window.fetch = jest.fn().mockImplementation(() => ({
          status: 500,
            json: () => Promise.reject({bills: []})
          }))
        await expect(getPosition()).rejects.toEqual(expected)
        })
})