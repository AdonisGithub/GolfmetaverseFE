import React from 'react';
const DistanceSearch = (props) =>{
  return(
    <div className="row">
        <div className="col-12 col-md-12">
          <h5>Distance(mi)</h5>
        </div>
        <div className="col-12 col-md-12">
            <div className="bs-example dist_range">
                <span id="result">
                    <input
                        type="number"
                        style={{marginBottom:"5px"}}
                        min={0}
                        max={100000}
                        className="w-100 background-transparent border-grey color-grey text-center font-small"
                        value={props.distance}
                        onChange={(e) => props.handleChange(e.target.value, "distance")}
                    />
                </span>
                <form>
                    <input
                    type="range"
                    min={0}
                    scale={5}
                    max={100000}
                    value={props.distance}
                    onChange={(e) => props.handleChange(e.target.value, "distance")}
                    className="zcustom-range w-100"
                    id="customRange"
                    />
                </form>
            </div>

        </div>
    </div>
  );
}
export default DistanceSearch;
