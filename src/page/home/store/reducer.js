import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage: 0,
    showScrool:false,
    showPopup:false,
    showSkeleton:false
});

const changeHomeData = (state,action) => {
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
    })
}

const addArticleList = (state,action) =>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage,
        showSkeleton:false
    })
}
export default (state = defaultState,action) =>{
    // const newState = Object.assign({},state);
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScrool',action.show);
        case constants.HOME_POPUP_SHOW:
            return state.set('showPopup',true);
        case constants.HOME_POPUP_HIDE:
            return state.set('showPopup',false);
        case constants.HOME_SHOW_SKELETON:
            return state.set('showSkeleton',true);
        default:
            return state;
    }
}