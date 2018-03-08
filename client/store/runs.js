import axios from 'axios'

//action type

const CREATE_RUNS = 'CREATE_RUNS'

//initial state

const defaultRuns = []


//action creator

const createRuns = runs => ({type: CREATE_RUNS, runs})

//thunk

export const newRuns = (raceId, runs) => {
  return dispatch => {
    return axios.post(`/api/runs/races/${raceId}`, runs)
      .then(res => dispatch(createRuns(res.data)))
      .catch(err => console.error(`Creating runs for race: ${raceId} unsuccessful`, err))
  }
}

//reducer

export default function (state = defaultRuns, action) {
  switch (action.type) {

    case CREATE_RUNS:
      return action.runs

    default:
      return state
  }
}
