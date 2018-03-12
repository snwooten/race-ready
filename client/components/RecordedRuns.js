import React, {Component} from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { fetchStrava } from '../store/index'

class RecordedRuns extends Component {
  componentDidMount() {
    this.props.loadStravaData()
  }
  render(){
    return (
      <div>
        <h3>Completed Runs</h3>
         <div className = "wrapper runChart">
          <table className = "table table-bordered">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Distance</th>
              </tr>
            </thead>
              <tbody>
              {
                this.props.runData.map(activity => {
                  return (
                    <tr key={activity.id}>
                      <td>{`${moment(activity.start_date_local).format('MMM D, YYYY')}`}</td>
                      <td>{`${Math.ceil(activity.distance / 1760)} miles`}</td>
                    </tr>
                  )
                })
              }
        </tbody>
      </table>
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


 export default connect(mapState, mapDispatch)(RecordedRuns);
