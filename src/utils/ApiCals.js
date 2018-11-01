import { key } from './ApiKey';

export const initialCongressFetch = async () => {
    const state = await getState()
    const url = `https://api.propublica.org/congress/v1/members/house/${state}/current.json`;
  
    const response = await fetch(url, {
      headers: {
        'X-API-Key':key
      }
    });
    const result = await response.json();
    return result
  };

  export const initialSenateFetch = async () => {
    const state = await getState()
    const url = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
  
    const response = await fetch(url, {
      headers: {
        'X-API-Key':key
      }
    });
    const result = await response.json();
    return result
  };

  export const getState = async () => {
    const url = 'http://gd.geobytes.com/GetCityDetails?callback='
    const response = await fetch(url)
    const data = await response.json()
    const state = data.geobytescode
    return state
  }


// "https://api.propublica.org/congress/v1/members/P000593.json"

// ('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });