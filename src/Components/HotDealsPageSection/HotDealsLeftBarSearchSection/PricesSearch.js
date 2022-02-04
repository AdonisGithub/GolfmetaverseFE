import React from 'react';

const PricesSearch = (props) =>{
  return(
    <div className="row">
        <div className="col-12 col-md-12">
          <h5>Price($)</h5>
        </div>
        <div className="col-md-6 col-6">
          <input
            type="number"
            className="w-100 background-transparent border-grey color-grey text-center font-small"
            value={props.price_min}
            onChange={(e) => props.handleChange(e.target.value, "price_min")}
            min={0}
          />
        </div>
        <div className="col-md-6 col-6">
          <input
            type="number"
            className="w-100 background-transparent border-grey color-grey text-center font-small"
            min={0}
            value={props.price_max}
            onChange={(e) => props.handleChange(e.target.value, "price_max")}
          />
        </div>
    </div>
  );
}
export default PricesSearch;