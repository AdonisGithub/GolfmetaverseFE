import axios from "../util/api";
//import axios from "axios"
import { Toast } from "../Components/Common/Notification";
import {
    COURSESNEARMESEARCH_SUCCESS,
    COURSESNEARMESEARCH_ERROR,

} from "./type";
const header = {
    //"userid":localStorage.getItem("userid"),
    //"token":localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
  }
export function CoursesNearMeSearch(SearchData) {
    return function (dispatch) {
        console.log('sended Coursesnearme Searchdata:', SearchData, header);
        axios
            //.post(process.env.REACT_APP_BACKEND_URL + "coursesnearmesearch", SearchData)
             .post("/api/coursesnearme", SearchData)
            .then(res => {
                console.log('received data:', res.data)
                if(res.data.length === 0){
                    Toast("","Match data don't exist!","danger");
                }
                else{
                    dispatch({
                        type: COURSESNEARMESEARCH_SUCCESS, 
                        payload: res.data
                    })
                }
            })
            .catch(error => {
                console.log("received HotDealsLeftBar error data:", error)
                dispatch({
                    type: COURSESNEARMESEARCH_ERROR, 
                    payload: 'Server Error in Coursesnearme, try later.'
                })
            });
    }
}
