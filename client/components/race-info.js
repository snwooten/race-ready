import React from 'react'
import {connect} from 'react-redux'


const RaceInfo = (props) => {
  return(
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="race-name"><small>Race Name</small></label>
          <input name="race-name" type="text" />
        </div>
        <div>
          <label htmlFor="race-date"><small>Race Date</small></label>
          <input name="race-date" type="date" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


