import { combineReducers } from 'redux';

import {hotdealsleftbarsearch}  from './HotDealsLeftBarSearch.reducers';
import {coursesnearmesearch} from './CoursesNearMeSearch.reducers';

const rootReducer = combineReducers({
    hotdealsleftbarsearch,
    coursesnearmesearch
});

export default rootReducer;