 import axios from 'axios'

const GET_STRAVA = 'GET_STRAVA'

const getStrava = strava => ({type: GET_STRAVA, strava})

const defaultStrava = []

export const fetchStrava = (stravaId) => dispatch => {
    axios.get(`/auth/activities/${stravaId}`)
      .then(stravaData => dispatch(getStrava(stravaData.data)))
      .catch(err => console.error(`Unable to fetch Strava data: ${stravaId}`, err))
}


export default function reducer (state = defaultStrava, action) {
  switch (action.type) {

    case GET_STRAVA:
      return action.strava

    default:
      return state
  }
}
