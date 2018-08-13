import {combineReducers} from 'redux';
import LoginReducers from './LoginReducers';
 
const rootReducer = combineReducers({
    //为自定义的login起名字
	login: LoginReducers,
});
 
export default rootReducer;
