import * as types from './ActionType';
 
//发送Action
export function performLoginAction(username, password) {
	return (dispatch) => {
		console.log("run......performLoginAction.....performLogin");
		dispatch(performLogin());
		if (username === 'HF' && password === '123') {
			dispatch(receiveLoginResult("succeed"));
		} else {
            //发送action
			dispatch(receiveLoginResult(1));
		}
	}
}
 
function performLogin() {
	return {
		type: types.PERFORM_LOGIN_ACTION,
	}
}

//action 定义
function receiveLoginResult(result) {
	return {
		type: types.RECEIVE_LOGIN_ACTION,
		data: result
	}
}
export function add(num){
    return {
        type: types.ADD_ACTION,
        data: num,
    };
}
export function sub(num){
    return {
        type: types.SUB_ACTION,
        data: num,
    };
}
