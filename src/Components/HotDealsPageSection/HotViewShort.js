import React from "react";

const HotViewShort = (props) => {
  return (
    <div className="hot_view_short">
      <div className="viw_by_left">
        view by:
        <ul className="nav nav-pills">
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Monday")}>
              Mon
            </button>
          </li>
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Tuesday")}>
              Tue
            </button>
          </li>
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Wednesday")}>
              Wed
            </button>
          </li>
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Thursday")}>
              Thu
            </button>
          </li>
          <li>
            <button  className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Friday")}>
              Fri
            </button>
          </li>
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Saterday")}>
              Sat
            </button>
          </li>
          <li>
            <button className="btn" data-toggle="pill" onClick={(e) => props.handleweekclick("Sunday")}>
              Sun
            </button>
          </li>
        </ul>
      </div>
      <div className="shrt_by">
        Short By:
        <select className="custom-select"onChange={(e)=>props.handlesortclick(e.target.value)}>
          <option value="choosedsort">Choose...</option>
          <option value="reviewsort" >Review</option>
          <option value="closestsort">Closest</option>
          <option value="namesort">A-Z</option>
        </select>
      </div>
    </div> 
  );
};
export default HotViewShort;
