import React, {Component} from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { runDistances, runStatus, month, day, day2, runStatus2 } from '../runs'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class RunCal extends Component {
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
let earlierMarathon = [];
for (let i = 0; i <= 72; i++) {
  if (this.props.runData.start_date_local  && this.props.runData.start_date_local === earlierMarathon.start){
    earlierMarathon.push({
      title: `${runDistances[i]} mile run - c`,
      start: new Date(2018, month[i] - 6, day2[i] + 1),
      end: new Date(2018, month[i] - 6, day2[i] + 2),
      desc: 'Training Run'
    })
  } else {
      earlierMarathon.push({
        title: `${runDistances[i]} mile run - ${runStatus2[i]}`,
        start: new Date(2018, month[i] - 6, day2[i] + 1),
        end: new Date(2018, month[i] - 6, day2[i] + 2),
        desc: 'Training Run'
    })
  }
}

  let nextRun = earlierMarathon.find(event => {
          return event.start >= Date.now()
        })
  return (
    <div className="calPage">
     <h2>{`${this.props.user.name}'s Training Calendar`}</h2>
     <h4>{`Your Next Training Run is on ${moment(nextRun.start).format('MMMM D, YYYY')}`}</h4>
     <h4>Your Next Race is on May 5, 2018</h4>
     <p>key: c = run complete | f = future run | i = incomplete run</p>
      <div className="cal">
        <BigCalendar
          events={events, earlierMarathon}
          views={['month']}
          step={60}
          defaultDate={new Date(2018, 2, 1)}
        />
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
}


 export default connect(mapState)(RunCal);
