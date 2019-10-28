import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

//这个函数不暴露出去给自己用，放在顶部
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})

const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})

const changPage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})

const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export default {
    searchFocus,
    searchBlur,
    getList,
    mouseEnter,
    mouseLeave,
    changPage
}