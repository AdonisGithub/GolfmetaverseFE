import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchFilterVideo from "../../Components/HotDealsPageSection/SearchFilterVideo";
import OtherStuff from "../../Components/HotDealsPageSection/OtherStuff";
import GoogleAd from "../../Components/HotDealsPageSection/GoogleAd";
import HotViewShort from "../../Components/HotDealsPageSection/HotViewShort";
import HotProductHolder from "../../Components/HotDealsPageSection/HotProductHolder";
import DateSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/DateSearch";
import GolfersSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/GolfersSearch";
import HolesSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/HolesSearch";
import PricesSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/PricesSearch";
import TimesSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/TimesSearch";
import DistanceSearch from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/DistanceSearch";

import LocationInput from "../../Components/HotDealsPageSection/HotDealsLeftBarSearchSection/LocaleInput";
import * as Actions from "../../_actions";

// const getTodaydate = ()=>{
//   var  today = new Date();
//   var todaydate ="";
//   if((today.getMonth()+1) < 10){
//     if(today.getDate() < 10)
//       todaydate = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();
//     else
//       todaydate = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
//   }
//   else{
//     if(today.getDate() < 10)
//       todaydate = today.getFullYear()+'-'+(today.getMonth()+1)+'-0'+today.getDate();
//     else
//       todaydate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//   }
//   return todaydate;
// }

const HotDealsPage = () => {
  const [SearchData, SetSearchData] = useState({
    date: "",
    distance: "1000",
    price_min: "1",
    price_max: "500",
    golfers: "any",
    holes: "any",
    time_min: "",
    time_max: "",
  }); 
  const [SearchEnable, SetSearchEnable] = useState(false); //search button states
  const [Address, SetAddress] = useState({
    address: "",
    longitude: 0.0,
    latitude: 0.0,
  }); //variable for city name and coordinate
  const handleChangeData = (e, type) => {
    let tempData = { ...SearchData };
    tempData[type] = e;
    SetSearchData(tempData);
  }; //handle function to receive props and present state 

  const handleChangeLocation = (e) => {
    console.log("received from PlaceAutoComplete:", e);
    SetAddress(e);
  }; // receive props

  const data = useSelector((state) => state.hotdealsleftbarsearch.data); //store
  const dispatch = useDispatch();

  useEffect(() => {
    //const today= getTodaydate();
    //console.log(today);
    // const SendSearchData = {
    //   coordinate: [-82.452606, 27.964157],
    //   distance: SearchData.distance,
    //   date: today,
    //   price_min: SearchData.price_min,
    //   price_max: SearchData.price_max,
    //   golfer: SearchData.golfers,
    //   hole: SearchData.holes,
    //   time_min: SearchData.time_min,
    //   time_max: SearchData.time_max,
    // };
    // dispatch(Actions.HotDealsLeftBarSearch(SendSearchData));
    // console.log("initial send data:", SendSearchData);
     console.log("received data:", data);
    //HotProductHolderList(data);
  },[data] );

  const HotProductHolderList = (d) => {
    if (d.length) {
      return d.map(function (currentdata, i) {
        return <HotProductHolder data={currentdata} key={i} />;
      });
    } else {
      return null;
    }
  }; //display product holder

  const searchbyweek = (week) => {
    // console.log(week);
    if (Address.address &&SearchData.distance&&SearchData.price_min &&SearchData.price_max &&
      SearchData.golfers &&SearchData.holes &&SearchData.time_min &&SearchData.time_max) {
        const SendWeekSearchData = {
          coordinate: [Address.longitude, Address.latitude],
          distance: SearchData.distance,
          price_min: SearchData.price_min,
          price_max: SearchData.price_max,
          golfer: SearchData.golfers,
          hole: SearchData.holes,
          time_min: SearchData.time_min,
          time_max: SearchData.time_max,
          week: week,
        };
    dispatch(Actions.HotDealsLeftBarWeekSearch(SendWeekSearchData));
  }
  };
  //*sort function */
  const sortby = (type) => {
    let tempdata = JSON.parse(JSON.stringify(data));
    switch (type) {
      case "reviewsort": {
        console.log("review sort");
        console.log("review sorted? 1", tempdata);
        dispatch(Actions.ReviewSort(tempdata));
        console.log("review sorted?", tempdata);
        break;
      }
      case "namesort": {
        console.log("namesort sort");
        dispatch(Actions.NameSort(tempdata));
        console.log("review sorted?", tempdata);
        break;
      }
      case "closestsort": {
        console.log("closestsort sort");
        break;
      }
      case "choosedsort": {
        console.log("choosedsort sort");
        break;
      }
      default:
        break;
    }
  };
 
  function searchsubmit(e) {
    e.preventDefault();
    SetSearchEnable(true);
    const SendSearchData = {
      coordinate: [Address.longitude, Address.latitude],
      distance: SearchData.distance,
      date: SearchData.date,
      price_min: SearchData.price_min,
      price_max: SearchData.price_max,
      golfer: SearchData.golfers,
      hole: SearchData.holes,
      time_min: SearchData.time_min,
      time_max: SearchData.time_max,
    };
    if (Address.address &&SearchData.distance &&SearchData.date &&SearchData.price_min &&SearchData.price_max &&
        SearchData.golfers &&SearchData.holes &&SearchData.time_min &&SearchData.time_max) {
      dispatch(Actions.HotDealsLeftBarSearch(SendSearchData));
    }
  }


  return (
    <div className="container-fulid" style={{width: "100%"}}>
      <div className="container text-center" style={{ marginTop: 20 }}>
        {/* <div className="owText">GOLF ON THE BLOCKCHAIN</div> */}
        <div className="text">GOLF ON THE BLOCKCHAIN</div>
      </div>
      <div className="hot_deals_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <SearchFilterVideo />
              <div className="hot_deals_left_serch_bar">
                <LocationInput handleChangeLocation={handleChangeLocation} />
                {SearchEnable && !Address.address && (
                  <div className="text-danger">Location is required</div>
                )}
                <br />
                <DistanceSearch
                  distance={SearchData.distance}
                  handleChange={handleChangeData}
                />
                {SearchEnable && !SearchData.distance && (
                  <div className="text-danger">Distance is required</div>
                )}
                <br />
                <DateSearch
                  date={SearchData.date}
                  handleChange={handleChangeData}
                />
                {SearchEnable && !SearchData.date && (
                  <div className="text-danger">Date is required</div>
                )}
                <br />
                <PricesSearch
                  price_min={SearchData.price_min}
                  price_max={SearchData.price_max}
                  handleChange={handleChangeData}
                />
                {SearchEnable &&
                  !SearchData.price_min &&
                  !SearchData.price_max && (
                    <div className="text-danger">Price is required</div>
                  )}
                <br />
                <GolfersSearch
                  golfers={SearchData.golfers}
                  handleChange={handleChangeData}
                />
                {SearchEnable && !SearchData.golfers && (
                  <div className="text-danger">Golfers is required</div>
                )}
                <br />
                <HolesSearch
                  holes={SearchData.holes}
                  handleChange={handleChangeData}
                />
                {SearchEnable && !SearchData.holes && (
                  <div className="text-danger">Holes is required</div>
                )}
                <br />
                <TimesSearch
                  time_min={SearchData.time_min}
                  time_max={SearchData.time_max}
                  handleChange={handleChangeData}
                />
                {SearchEnable &&
                  !SearchData.time_min &&
                  !SearchData.time_max && (
                    <div className="text-danger">Time is required</div>
                  )}
                <br />
                <button
                  className="exp_btn g_btn"
                  //className="btn exp_btn   g_btn cg_btn1 btn_sr"
                  onClick={searchsubmit}
                >
                  <i className="fa fa-search" />
                  Search
                </button>
                <br/>
              </div>
              <OtherStuff />
              <GoogleAd />
            </div>
            <div className="col-12 col-md-9">
              <div className="hot_deals_right_bar">
                <HotViewShort
                  handleweekclick={searchbyweek}
                  handlesortclick={sortby}
                />
                <div className="hot_club_dec">
                  <h3>Golf Now Hot Deals Tee Times: for {data[0].date}</h3>
                </div>
                <div className="hot_product_listing">
                  <div className="row">{HotProductHolderList(data)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotDealsPage };
