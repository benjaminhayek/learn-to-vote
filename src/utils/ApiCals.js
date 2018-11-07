import { key } from './ApiKey';

export const getMembers = async (chamber) => {
  const state = await getState()    
  try {
      const url = `https://api.propublica.org/congress/v1/members/${chamber}/${state}/current.json`;
    
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

  export const comparePositions = async (id1, id2, chamber) => {
    try {
      const url = `https://api.propublica.org/congress/v1/members/${id1}/bills/${id2}/115/${chamber}.json`
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
