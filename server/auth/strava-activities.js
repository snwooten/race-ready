
import axios from 'axios'

const myAccessToken = process.env.STRAVA_ACCESS_TOKEN
const id = 28848443

export const getWorkout = () => {
  return axios.get("https://www.strava.com/api/v3/activities?include_all_efforts=", myAccessToken)
    .then(res => console.log(res.data))
    .catch(err => console.error('fetching Strava data was unsuccessful', err))
}
