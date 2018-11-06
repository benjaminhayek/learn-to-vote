import { key } from './ApiKey';

export const initialCongressFetch = async (val) => {
  const state = await getState()    
  try {
      const url = `https://api.propublica.org/congress/v1/members/house/${val || state}/current.json`;
    
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result
    } catch(error) {
      throw new Error(error.message)
    }
  };

  export const initialSenateFetch = async () => {
    const state = await getState()
    try {
      const url = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
    
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result
    } catch(error) {
      throw new Error(error.message)
    }
  };

  export const getState = async () => {
    try {
      const url = 'http://gd.geobytes.com/GetCityDetails?callback='
      const response = await fetch(url)
      const data = await response.json()
      const state = data.geobytescode
      return state
    } catch(error) {
      throw new Error(error.message)
    }
  }

  export const getEducationBills = async () => {
    try {
      const url = "https://api.propublica.org/congress/v1/bills/search.json?query=education"
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result.results[0].bills
    } catch(error) {
      throw new Error(error.message)
    }
  }

  export const comparePositions = async (id1, id2) => {
    try {
      const url = `https://api.propublica.org/congress/v1/members/${id1}/bills/${id2}/115/house.json`
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result.results[0].bills
    } catch(error) {
      throw new Error(error.message)
    }
  }

  export const compareSenators = async (id1, id2) => {
    try {
      const url = `https://api.propublica.org/congress/v1/members/${id1}/bills/${id2}/115/senate.json`
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result.results[0].bills
    } catch(error) {
      throw new Error(error.message)
    }
  }

  export const getSponsors = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result.results[0].congressdotgov_url
    } catch(error) {
      throw new Error(error.message)
    }
  }

  export const getPosition = async (id) => {
    try {
      const url = `https://api.propublica.org/congress/v1/members/${id}/votes.json`
      const response = await fetch(url, {
        headers: {
          'X-API-Key':key
        }
      });
      const result = await response.json();
      return result.results[0].votes
    } catch(error) {
      throw new Error(error.message)
    }
  }


// "https://api.propublica.org/congress/v1/members/P000593.json"
