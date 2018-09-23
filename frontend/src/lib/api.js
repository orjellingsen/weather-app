import axios from 'axios'

const endPoint = 'http://localhost:4444/forecast'
const options = {
  mode: 'cors',
}

/*
  The following function accepts two arguments: address and parameters.
    address will be converted to lat/lng on the server.
    parameters should be a string of HTTP query parameters (https://darksky.net/dev/docs).

  Returns an object with two properties: forecast and geo.
    forecast contains the return from the DarkSky API.
    geo contains details about the address that was returned from the OpenCage Geocoder API.
*/

export const getForecast = async ({ address, params }) => {
  const endpoint = `${endPoint}/${address}/${params}`
  const { data } = await axios.get(endpoint, options).catch(err => console.log(err))
  return data
}
