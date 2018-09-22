import axios from 'axios'

const endPoint = 'http://localhost:4444/forecast'
const options = {
  mode: 'cors',
}

export const getForecast = async ({ lat, lng, params }) => {
  const endpoint = `${endPoint}/${lat}/${lng}/${params}`
  const { data } = await axios.get(endpoint, options)
  return data
}
