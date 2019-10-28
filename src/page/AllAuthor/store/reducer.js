import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    cardList:[]
})

const AuthorList = (state,action) => {
    return state.set('cardList',action.list);
}

const MoreAuthor = (state,action) =>{
    return state.set('cardList',state.get('cardList').concat(action.list))
}


export default (state = defaultState,action) =>{
    switch(action.type){
        case constants.AUTHOR_LIST:
            return AuthorList(state,action);
        case constants.More_AUTHOR:
            return MoreAuthor(state,action);
        default:
            return state;
    }
}