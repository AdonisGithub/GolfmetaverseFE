import {
    COURSESNEARMESEARCH_SUCCESS,
    COURSESNEARMESEARCH_ERROR,
  
  } from "../_actions/type";
  
  const initialState = {
    success: false,
    error:'',
    data: [
      {
        clubname: "",
        location:"",
        coordinate: [],
        review: 0,
        like: 0,
      },
    ],
  };
  
  export function coursesnearmesearch(state = initialState, action) {
    switch (action.type) {
      case COURSESNEARMESEARCH_SUCCESS:
        return {
          success: true,
          data: action.payload,
        };
      case COURSESNEARMESEARCH_ERROR:
          return {
              success: false,
              error  : action.payload
          }
      default:
        return state;
    }
  };
  
  