import { HOTDEALS_REVIEW_SORT } from "./type";

export function ReviewSort(sortdata) {
  return function (dispatch) {
    const reviewsorteddata = sortdata.sort((a, b) => b.review - a.review);
    console.log('dispatch here')
    dispatch({
      type: HOTDEALS_REVIEW_SORT,
      payload: reviewsorteddata,
    });
  };
}

export function NameSort(sortdata) {
  return function (dispatch) {
    const namesorteddata = sortdata.sort(function (a, b) {
      var nameA = a.clubname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.clubname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    dispatch({
      type: HOTDEALS_REVIEW_SORT,
      payload: namesorteddata,
    });
  };
}
