import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../page/home/store/reducer';
import detailReducer from '../page/detail/store/reducer';
import loginReducer from '../page/login/store/reducer';
import authorReducer from '../page/AllAuthor/store/reducer'

const reducer = combineReducers ({
    header: headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
    author:authorReducer
})

export default reducer;