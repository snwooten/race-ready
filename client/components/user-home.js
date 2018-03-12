import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import RaceInfo from './race-info'
import moment from 'moment'


/**
 * COMPONENT
 */
export const UserHome = (props) => {
  console.log(props.race)
  return (
    <div className="home">
      <h3>Welcome, {props.user.name}! Let's get running</h3>
      <img className="profile-photo" src={props.user.photo} />
      <div className="newRace-form">
        <RaceInfo user={props.user} />
      </div>
      <div>
        <h4>Upcoming Races: </h4>
          {
            props.race.raceName && <div>{`${props.race.raceName} on ${moment(props.race.raceDate).format('MMM DD YYYY')}`}</div>
          }
      </div>
      <div>
        <h4><Link to="/run-cal"> View Your Training Calendar </Link></h4>
      </div>
      <div>
        <h4><Link to="/recorded-runs"> View Your Completed Runs Recorded by Strava </Link></h4>
      </div>
    </div>
  )
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    race: state.race
  }
}

export default connect(mapState)(UserHome)
