import axios from "../util/api";
//import axios from "axios";
import { Toast } from "../Components/Common/Notification";
import {
    HOTDEALSLEFTBARSEARCH_SUCCESS,
    HOTDEALSLEFTBARSEARCH_ERROR,

    HOTDEALSLEFTBARWEEKSEARCH_SUCCESS,
    HOTDEALSLEFTBARWEEKSEARCH_ERROR,
} from "./type";

const header = {
    //"userid":localStorage.getItem("userid"),
    //"token":localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
  }
export function HotDealsLeftBarSearch(SearchData) {
    return function (dispatch) {
        console.log('sended HotDealsLeftbar Searchdata:', SearchData);
        axios
            //.post(process.env.REACT_APP_BACKEND_URL + "hotdealsleftbarsearch", SearchData)
            .post("/api/hotdealsleftbarsearch", SearchData, header)
            .then(res => {
                console.log('received Searched data:', res.data)
                if(res.data.length === 0){
                    Toast("","Match data don't exist!","danger");
                }
                else{
                    dispatch({
                        type: HOTDEALSLEFTBARSEARCH_SUCCESS, 
                        payload: res.data
                    })
                }
            })
            .catch(error => {
                console.log("received HotDealsLeftBar Search error data:", error)
                dispatch({
                    type: HOTDEALSLEFTBARSEARCH_ERROR, 
                    payload: 'Server Error in HotDealsLeftBar Search, try later.'
                })
            });
    }
}
export function HotDealsLeftBarWeekSearch(Data) {
    return function (dispatch) {
        console.log('sended HotDealsLeftbar week search data:', Data);
        axios
            //.post(process.env.REACT_APP_BACKEND_URL + "hotdealsleftbarweeksearch", Data)
            .post("/api/hotdealsleftbarweeksearch", Data, header)
            .then(res => {
                console.log('received week searched data:', res.data)
                if(res.data.length === 0){
                    Toast("","Match data don't exist!","danger");
                }
                else{
                    dispatch({
                        type: HOTDEALSLEFTBARWEEKSEARCH_SUCCESS, 
                        payload: res.data
                    })
                }
            })
            .catch(error => {
                console.log("received HotDealsLeftBar week search error data:", error)
                dispatch({
                    type: HOTDEALSLEFTBARWEEKSEARCH_ERROR, 
                    payload: 'Server Error in HotDealsLeftBar week search, try later.'
                })
            });
    }
}