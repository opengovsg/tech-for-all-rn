import axios from 'axios'
import { SVY21 } from './svy21'

const URL = 'https://carparks-near-me.herokuapp.com'

export async function getCarparkDataByLocation (location) {
  const params = {
    location
  }
  const res = await axios.get(URL, { params })
  const data = res.data
  const { lat, lon } = SVY21.computeLatLon(data.y_coord, data.x_coord)
  return {
    ...data,
    latitude: lat,
    longitude: lon
  }
}
