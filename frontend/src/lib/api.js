import axios from 'axios'
import { ENDPOINT } from '../config'

const options = {
  mode: 'cors',
}

export const fetchForecast = async ({ lat, lng, params }) => {
  const endpoint = `${ENDPOINT}/${lat}/${lng}/${params}`
  const { data } = await axios.get(endpoint, options).catch(err => console.log(err))
  return data
}
