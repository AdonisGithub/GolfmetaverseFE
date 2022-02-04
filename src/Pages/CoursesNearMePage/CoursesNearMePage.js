import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../_actions";
import Course from "../../Components/CoursesNearMeSection/Course";

import Geocode from "react-geocode";

const CouresNearMepage = () => {

    const [distance, setDistance] = useState(""); 
    const [currentlocation, setCurrentlocation] = useState([]); //variable to present my coordinate
    const [currentAddress, setCurrentAddress] = useState(""); //variable to present my address
    function  handlechange(e){setDistance(e.target.value);}
    const coursedata = useSelector((state) => state.coursesnearmesearch.data); //store data
    useEffect(()=>{
        console.log(" In CourseNearMe Page received data:", coursedata);
    },[coursedata]);

    //get my coordinate and address
    useEffect(()=>{
        navigator?.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lng } }) => {

                Geocode.setApiKey("AIzaSyAyey8V1rjcQKaYunTnzWNZ_gHEGNgGk3w");
                //Geocode.enableDebug();        
                Geocode.fromLatLng(lat, lng).then(
                    response => {
                        const address = response.results[0].formatted_address;
                        setCurrentAddress(address);
                        //console.log(address);
                    },
                    error => {
                        console.error(error);
                    }
                );
                const pos = [lng, lat];                
                setCurrentlocation(pos);
            }
          );
        //console.log("currentlocation:", currentlocation);
        //console.log("currentAddress:", currentAddress);

    },);

    //display golfcourses
    const GolfCourseList = (d) => {
        if (d.length) {
          return d.map(function (currentdata, i) {
            return <Course data={currentdata} key={i} />;
          });
        } else {
          return null;
        }
    };
    //send data fuction(using action)
    const dispatch = useDispatch();
    function handleSubmit(e) {
		e.preventDefault();

		if (distance) {
            const reqdata = {
                //date: searchdata.date,
                distance: distance,
                coordinate: currentlocation
            }
		    dispatch(Actions.CoursesNearMeSearch(reqdata));
        
		}
	}
    return (
        <div className="container">
            <div className="calen_cont">
                <div className="box_calen">
                    <div className="row">
                    <div className="col-12 col-md-3">
                        {/* <input
                            className="form-control"
                            type="date"
                            name='date'
                            value={searchdata.date}
                            onChange={handlechange}
                        /> */}
                        <div style={{float:"right", marginTop: 8}}>Distance (mile):</div>
                    </div> 
                    <div className="adrs col-12 col-md-6">
                        <input
                            className="form-control"
                            type="Number"
                            name='distance'
                            placeholder="Enter distance"
                            value={distance}
                            onChange={handlechange}
                        />
                    </div>
                    <div className="serch_bt col-12 col-md-3">
                        <button
                        className="btn exp_btn ztext-white text-capitalize  g_btn cg_btn1 btn_sr"
                        onClick={handleSubmit}
                        >
                        <i className="fa fa-search" />
                         Search
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            <div className="destinations_wrapper_top brd_botm_hdr">
                <h2> COURSES NEAR ME</h2>
                <h5>Your Address:{currentAddress}</h5>
                <h5>Your Location Coordinate:[<span>{currentlocation[1]}</span>,<span>{currentlocation[0]}</span>]</h5>
            </div>
            <div className="destinations_wrapper_bottom">
                {GolfCourseList(coursedata)}
            </div>
        </div>
    );
};

export { CouresNearMepage };
