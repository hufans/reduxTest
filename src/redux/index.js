// redux.js
import { combineReducers, createStore } from 'redux';

// actions.js
export const activateKabaya = kabaya => ({
    type: 'ACTIVATE_KABAYA',
    kabaya,
});

export const closeKabaya = () => ({
    type: 'CLOSE_KABAYA',
});

export const addActive = () =>({
    type:"ADD",
})
export const subActive = () =>({
    type:"SUB",
})
//----------------------------------------------------------
// reducers.js
export const kabayaRe = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_KABAYA':
            return action.kabaya;
        case 'CLOSE_KABAYA':
            return {};
        default:
            return state;
    }
};

export const ADDReducers = ({num = 1},action) =>{
    switch(action.type){
        case "ADD":
        return {num:num+1};
        case "SUB":
        return {num:num-1};
    }
}

export const reducers = combineReducers({
    kabayaRe,
    // ADDReducers,
});

// store.js
export function configureStore(State = {}) {
    const store = createStore(reducers, State);
    return store;
}

export const store = configureStore();
