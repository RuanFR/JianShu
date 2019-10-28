import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login:false,
    showHeader:true,
    titleIndex:0
});

const changLogin = (state,action) =>{
    return state.set('login',action.value);
}

const logOut = (state,action) =>{
    return state.set('login',action.value);
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return changLogin(state,action);
        case constants.LOGOUT:
            return logOut(state,action);
        case constants.HIDE_HEADER:
            return state.set('showHeader', false);
        case constants.SHOW_HEADER:
            return state.set('showHeader', true);
        case constants.TITLE_INDEX:
            return state.set('titleIndex', action.index)
        default:
            return state;
    }
}