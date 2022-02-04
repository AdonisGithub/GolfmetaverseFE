import React from 'react';
const DateSearch = (props) =>{
  return(
    <div className="row">
        <div className="col-12 col-md-12">
          <h5>Date</h5>
        </div>
        <div className="col-12 col-md-12">
          <input
            type="date"
            // defaultValue={"2020-12-31"}
            value={props.date}
            onChange={(e) => props.handleChange(e.target.value, "date")}
            //className=" form-control"
            className="w-100 text-center"
          />
        </div>
    </div>
  );
}
export default DateSearch;
