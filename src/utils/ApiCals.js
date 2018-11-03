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

  export const getEducationBills = async () => {
    const url = "https://api.propublica.org/congress/v1/bills/search.json?query=education"
    const response = await fetch(url, {
      headers: {
        'X-API-Key':key
      }
    });
    const result = await response.json();
    return result.results[0].bills
  }

  export const comparePositions = async (id1, id2) => {
    const url = `https://api.propublica.org/congress/v1/members/${id1}/bills/${id2}/114/house.json`
    const response = await fetch(url, {
      headers: {
        'X-API-Key':key
      }
    });
    const result = await response.json();
    // console.log(result.results[0].bills)
    return result.results[0].bills
  }

  export const getSponsors = async (url) => {
    const response = await fetch(url, {
      headers: {
        'X-API-Key':key
      }
    });
    const result = await response.json();
    return result.results[0].congressdotgov_url
  }


// "https://api.propublica.org/congress/v1/members/P000593.json"
