import React from 'react';

const GolfersSearch = (props) =>{
  return(
    <div className=" row ">
        <div className="col-12 col-md-12 ">
          <h5>Golfers</h5>
        </div>
        <div className="col-12 col-md-12 d-flex justify-content-center">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"any"}
                onChange={(e) => props.handleChange("any", "golfers")}
                className="form-check-input"
                name="optradio"
              />
              Any
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"1"}
                onChange={(e) => props.handleChange("1", "golfers")}
                className="form-check-input"
                name="optradio"
              />
              1
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"2"}
                onChange={(e) => props.handleChange("2", "golfers")}
                className="form-check-input"
                name="optradio"
              />
              2
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"3"}
                onChange={(e) => props.handleChange("3", "golfers")}
                className="form-check-input"
                name="optradio"
              />
              3
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"4"}
                onChange={(e) => props.handleChange("4", "golfers")}
                className="form-check-input"
                name="optradio"
              />
              4
            </label>
          </div>
        </div>
    </div>
  );
}
export default GolfersSearch;