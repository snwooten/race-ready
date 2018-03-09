import axios from 'axios'

//action types

const UPDATE_RUN = 'UPDATE_RUN'

//initial state

const defaultSingleRun = {}


//action creators

const updateRun = singleRun => ({type: UPDATE_RUN, singleRun})


export const editRun = (runId, run) => {
  return dispatch => {
    return axios.put(`/api/runs/${runId}`, run)
    .then(res => dispatch(updateRun(res.data)))
    .catch(err => console.error(`Updating Run: ${runId} unsuccessful`, err))
  }
}

//reducer

export default function (state = defaultSingleRun, action) {
  switch (action.type) {

    case UPDATE_RUN:
      return action.singleRun

    default:
      return state
  }
}
