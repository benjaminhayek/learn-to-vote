import { initialCongressFetch, initialSenateFetch, getState, getEducationBills } from './ApiCals';
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

        initialCongressFetch(state);
        expect(window.fetch).toHaveBeenCalledWith(expected);
      });

      it('calls fetch with the correct params', () => {
        const state = 'http://gd.geobytes.com/GetCityDetails?callback='
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                senate: []
            })
          }))
        const url = "http://gd.geobytes.com/GetCityDetails?callback=";
    
        const expected = url

        initialSenateFetch(state);
        expect(window.fetch).toHaveBeenCalledWith(expected);
      });

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

      it('calls fetch with the correct params', () => {
        const url = "https://api.propublica.org/congress/v1/bills/search.json?query=education"
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

        getEducationBills();
        expect(window.fetch).toHaveBeenCalledWith(...expected);
      });
})