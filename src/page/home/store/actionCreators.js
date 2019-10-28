import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
})

const addHomeList = (list, newxtPage) => ({
    type:constants.ADD_ARTICLE_LIST,
    list: fromJS(list),

})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const  toggleTopShow = (show) =>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})

export const getMoreList = (page) => {
    return (dispatch) =>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result = res.data.list;
            dispatch(addHomeList(result, page + 1))
        })
    }
}

export const homePopupShow = () => ({
    type:constants.HOME_POPUP_SHOW
})

export const homePopupHide = () => ({
    type:constants.HOME_POPUP_HIDE
})

export const showSkeleton = () => ({
    type:constants.HOME_SHOW_SKELETON
})