export const initialFetch = async (state) => {
    const url = `https://api.propublica.org/congress/${state}/members/house/co/current.json`;
    const PROPUBLICA_API_KEY = 'UoibDlxh2E72NEKV7BuJd8DzwdsGlrtgd5KFTgGj'
  
    const response = await fetch(url, {
      headers: {
        'X-API-Key':PROPUBLICA_API_KEY
      }
    });
    const result = await response.json();
    return result.results
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