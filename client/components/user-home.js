import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

/**
 * COMPONENT
 */
export const UserHome = (props) => {
const events = [
      {
    title: 'All Day Event very long title',
    startDate: new Date(2018, 3, 1),
    endDate: new Date(2018, 3, 2),
  },
]

  return (
    <div>
      <h3>Welcome, {props.user.name}! Let's get running</h3>
      <img className="profile-photo" src={props.user.photo} />
      <div className="cal">
        <BigCalendar
            events={events}
            views={['month']}
            step={60}
            defaultDate={new Date(2018, 3, 1)}
            />
      </div>
    </div>
  )
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

