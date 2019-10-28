import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const AauthorList = (result) =>({
    type:constants.AUTHOR_LIST,
    list: fromJS(result)
})

const MoreAuthor = (result) => ({
    type:constants.More_AUTHOR,
    list: fromJS(result)
})

export const getAuthorList = () => {
    return (dispatch) =>{
        axios.get('/api/authorList.json').then((res)=>{
            const result = res.data.data;
            dispatch(AauthorList(result))
        })
    }
}

export const getMoreAuthor = () => {
    return (dispatch) =>{
        axios.get('/api/authorList.json').then((res)=>{
            const result = res.data.data;
            dispatch(MoreAuthor(result))
        })
    }
}