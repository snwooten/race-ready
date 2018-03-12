import React from 'react'
import {connect} from 'react-redux'
//import {getWorkout} from '../runData'
import RunCal from './runCal'
import RaceInfo from './race-info'


/**
 * COMPONENT
 */
export const UserHome = (props) => {
  return (
    <div>
      <h3>Welcome, {props.user.name}! Let's get running</h3>
      <img className="profile-photo" src={props.user.photo} />
      <div className="newRace-form">
        <RaceInfo user={props.user} />
      </div>
      <div>
        <p>key: c = run complete | f = future run | i = incomplete run</p>
        <RunCal user={props.user} race={props.race}/>
      </div>
    </div>
  )
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)
