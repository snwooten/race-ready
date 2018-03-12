import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newRace, newRuns } from '../store/index'
import { marathonRuns } from '../runs'


export class RaceInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props

    return (
      <div>
        <form onSubmit={(evt) => this.props.onSubmit(evt, user.id)}>
          <div>
            <label htmlFor="raceName"><small>Race Name</small></label>
            <input name="raceName" type="text" />
          </div>
          <div>
            <label htmlFor="raceDate"><small>Race Date</small></label>
            <input name="raceDate" type="date" />
          </div>
          <div>
            <label htmlFor="trainingStart"><small>Training Start Date</small></label>
            <input name="trainingStartDate" type="date" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    race: state.race
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    onSubmit: (evt, userId) => {
      evt.preventDefault()
      const aRace = {
        raceName: evt.target.raceName.value,
        raceDate: evt.target.raceDate.value,
        trainingStartDate: evt.target.trainingStartDate.value,
        userId
      }
      dispatch(newRace(aRace))
      evt.target.raceName = ''
      evt.target.raceDate = ''
      evt.target.trainingStartDate = ''

//dispatch(newRuns(marathonRuns))
    }
  }
}

export default connect(mapState, mapDispatch)(RaceInfo)
