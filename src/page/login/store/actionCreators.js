import axios from "axios";
import * as constants from './constants';

const changeLogin = () => ({
    type:constants.CHANGE_LOGIN,
    value:true
});

export const logout = () => ({
    type:constants.LOGOUT,
    value:false
});

export const login = (accout, password) => {
    return (dispach) =>{
        axios.get('/api/login.json?account=' + accout + '&password' + password).then((res)=>{
            const result = res.data.data;
            if(result){
                dispach(changeLogin())
            }else{
                alert('假')
            }
        })
    }
};

export const hide = () => ({
    type:constants.HIDE_HEADER
});

export const show = () => ({
    type:constants.SHOW_HEADER
});

export const nowTitle = (index) => ({
    type:constants.TITLE_INDEX,
    index
})