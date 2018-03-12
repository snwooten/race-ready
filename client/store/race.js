import axios from 'axios'

//action types

const GET_RACE = 'GET_RACE'
const CREATE_RACE = 'CREATE_RACE'


//action creators

const getRace = race => ({type: GET_RACE, race})
const createRace = race => ({type: CREATE_RACE, race})

//initial state
const defaultRace = {
  raceName: '',
  raceDate: null,
  trainingStartDate: null
}

//reducer

export default function reducer(state = defaultRace, action) {
  switch (action.type) {

    case GET_RACE:
      return action.race

    case CREATE_RACE:
      return Object.assign({}, action.race)

    default:
      return state
  }
}

//thunk creators

export const fetchRace = (raceId) => {
  return dispatch => {
    return axios.get(`/api/races/${raceId}`)
    .then(res => dispatch(getRace(res.data)))
    .catch(err => console.error(`Unable to fetch Race: ${raceId}`, err))
  }
}

export const newRace = (race) => dispatch => {
   axios.post('/api/races', race)
      .then(aRace => dispatch(createRace(JSON.parse(aRace.config.data))))
      .catch(err => console.error('Unable to create Race', err))
}

