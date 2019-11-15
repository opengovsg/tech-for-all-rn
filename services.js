import axios from 'axios'

const URL = 'https://carparks-near-me.herokuapp.com'

export async function getCarparkDataByLocation (location) {
  const params = {
    location
  }
  const res = await axios.get(URL, { params })
  return res.data
}
