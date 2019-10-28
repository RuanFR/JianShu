import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
    ListItem,
    ListInfo,
    LoadMore,
    Menu
} from '../style';
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';

class List extends PureComponent{

    render(){
        const { list, getMoreList, page, showSkeleton } = this.props;
        return(
            <div>
                {
                    list.map((item,index)=>(
                        <Link key={index} to={"/detail/" + item.get('id')} style={style}>
                            <ListItem>
                            <img className="pic" src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                    <Menu>
                                        <span className="iconfont">&#xe6b2;</span>
                                        <p className="Num">{item.get('diamondsNum')}</p>
                                        {/* 用户 */}
                                        <p className="name">{item.get('userName') ? item.get('userName'):null}</p>
                                        <span className="iconfont">&#xe69f;</span>
                                        <p className="name">{item.get('commentNum')}</p>
                                        <span className="iconfont">&#xe61a;</span>
                                        <p className="name">{item.get('startNum')}</p>
                                    </Menu>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                { 
                    showSkeleton ? <Skeleton active paragraph={{ rows: 3 }}/> : 
                    <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
                }
            </div>

        )
    }
}

const style = {
    "color":"#000"
}

// window.onscroll = function(){
//     // console.log(document.documentElement.scrollTop)
//     if(document.documentElement.scrollTop === 174){
//         dispatch(actionCreators.showSkeleton());
//         setTimeout(()=>{
//             dispatch(actionCreators.getMoreList(page));
//         },2000);
//     }
//     // console.log(List);
// }

const mapState = (state) =>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage']),
    showSkeleton:state.getIn(['home','showSkeleton'])
})

const mapDispatch = (dispatch) =>({
    getMoreList(page){
        dispatch(actionCreators.showSkeleton());
        setTimeout(()=>{
            dispatch(actionCreators.getMoreList(page));
        },2000);
        
    }
})
export default connect(mapState,mapDispatch)(List);