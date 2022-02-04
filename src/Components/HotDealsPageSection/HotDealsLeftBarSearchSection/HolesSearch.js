import React from 'react';

const HolesSearch = (props) =>{
  return(
    <div className="row">
        <div className="col-12 col-md-12">
          <h5>Holes</h5>
        </div>
        <div className="col-12 col-md-12 d-flex justify-content-center">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"any"}
                onChange={(e) => props.handleChange("any", "holes")}
                className="form-check-input"
                name="optradio1"
              />
              Any
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"9"}
                onChange={(e) => props.handleChange("9", "holes")}
                className="form-check-input"
                name="optradio1"
              />
              9
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="radio"
                value={"18"}
                onChange={(e) => props.handleChange("18", "holes")}
                className="form-check-input"
                name="optradio1"
              />
              18
            </label>
          </div>
        </div> 
    </div>
  );
}
export default HolesSearch;