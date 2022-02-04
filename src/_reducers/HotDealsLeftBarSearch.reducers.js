import {
  HOTDEALSLEFTBARSEARCH_SUCCESS,
  HOTDEALSLEFTBARSEARCH_ERROR,
  HOTDEALSLEFTBARWEEKSEARCH_SUCCESS,
  HOTDEALSLEFTBARWEEKSEARCH_ERROR,
  HOTDEALS_REVIEW_SORT,
  HOTDEALS_NAME_SORT,
} from "../_actions/type";

const initialState = {
  success: false,
  error: "",
  data: [
    {
      clubname: "",
      week: "",
      date: "",
      golfer: "",
      hole: "",
      time: 0,
      price: 0,
      review: 0,
      like: 0,
      coordinate: [],
      sold: false,
      telephone:"",
      zipcode:0
    },
  ],
};

export function hotdealsleftbarsearch(state = initialState, action) {
  switch (action.type) {
    case HOTDEALSLEFTBARSEARCH_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
      };
    case HOTDEALSLEFTBARSEARCH_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
      case HOTDEALSLEFTBARWEEKSEARCH_SUCCESS:
        return {
          ...state,
          success: true,
          data: action.payload,
        };
      case HOTDEALSLEFTBARWEEKSEARCH_ERROR:
        return {
          ...state,
          success: false,
          error: action.payload,
        };

    case HOTDEALS_REVIEW_SORT:
      return {  
        ...state,
        data: action.payload,
      };
    case HOTDEALS_NAME_SORT:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
