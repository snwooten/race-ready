import axios from 'axios'

//action type


//https://developers.google.com/fit/rest/v1/reference/users/dataSources/datasets
//me is being used for userID - Google Fit only supports 'me' at this time
//dataSourceId - data stream ID of the data source that created the dataset.
//datasetId - Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
const getWorkout = async() => {
    await axios.get('https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.activity.samples:com.google.android.gms:samsung:SM-G930V:ed688e8e:vehicle_exit_tala/datasets/1520548933959-1520548933958')
      console.log(res.data)
      .catch(err => console.error('fetching the Google Fit data was unsuccessful', err))
  }


//https://www.googleapis.com/fitness/v1/users/me/dataSources


export default getWorkout

