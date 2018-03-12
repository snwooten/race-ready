import React, {Component} from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { fetchStrava } from '../store/index'
import { runDistances, runStatus, month, day } from '../runs'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class RunCal extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadStravaData()
  }
  render() {
  let events = [];
  for (let i = 0; i <= 72; i++){
   events.push({
    title: `${runDistances[i]} mile run - ${runStatus[i]}`,
    start: new Date(2018, month[i], day[i]),
    end: new Date(2018, month[i], day[i] + 1),
    desc: 'Training Run'
    })
  }
  console.log('runCal run data: ', this.props)
  return (
    <div>
      <div className="cal">
        <BigCalendar
          events={events}
          views={["month"]}
          step={60}
          defaultDate={new Date(2018, 3, 1)}
        />
      </div>
      <div>
        {
          this.props.runData.map(activity => {
            return (
              <div key={activity.id}>
                <h5>{`${Math.ceil(activity.distance/1760)} miles completed on ${moment(activity.start_date_local).format('MMM D, YYYY')}`}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    race: state.race,
    runData: state.runData
  }
};

const mapDispatch = (dispatch, ownProps) => {
  let id = ownProps.user.stravaId
  return {
    loadStravaData() {
      dispatch(fetchStrava(id))
    }
  }
}


 export default connect(mapState, mapDispatch)(RunCal);
