import axios from 'axios'

const endPoint = 'http://localhost:4444/forecast'
const options = {
  mode: 'cors',
}

export const fetchForecast = async ({ lat, lng, params }) => {
  const endpoint = `${endPoint}/${lat}/${lng}/${params}`
  const { data } = await axios.get(endpoint, options).catch(err => console.log(err))
  return data
}
