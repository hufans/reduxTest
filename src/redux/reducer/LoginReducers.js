import * as types from '../action/ActionType';

const initialState = {
    loading: false,
    data: 1,
}

//解析action
export default function login(state = state ? state : initialState, action) {
    switch (action.type) {
        case types.PERFORM_LOGIN_ACTION:
            return {
                ...state,
                loading: true,
            };
        case types.RECEIVE_LOGIN_ACTION:
            return {
                ...state,
                loading: false,
                data: action.data + state.data,
            };

        case types.ADD_ACTION:
            return {
                ...state,
                data: action.data + state.data,
            };
        case types.SUB_ACTION:
            return {
                ...state,
                data: state.data - action.data,
            };
        default:
            return state;
    }
}
