import React from 'react';

const TimesSearch = (props) =>{
  return(
    <div className="row">
        <div className="col-12">
          <h5>Time</h5>
        </div>
        <div className="col-md-6 col-6">
          <input
            type="time"
            //defaultValue={"09:30"}
            value={props.time_min}
            onChange={(e) => props.handleChange(e.target.value, "time_min")}
            className="w-100 text-center"
          />
        </div>
        <div className="col-md-6 col-6">
          <input
            type="time"
            //defaultValue={"10:30"}
            value={props.time_max}
            onChange={(e) => props.handleChange(e.target.value, "time_max")}
            className="w-100 text-center"
          />
        </div>
    </div>
  );
}
export default TimesSearch;