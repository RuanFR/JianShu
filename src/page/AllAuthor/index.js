import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    AuthorWrapper
} from './style';
import Card from './components/Card';
import * as actionCreatos from './store/actionCreators';

class AllAuthor extends PureComponent{

    render(){
        const { cardList, getLoadAuthor } = this.props;
        
        return(
            <AuthorWrapper>
                <div className="content">
                    <div className="header-title">
                        <img className="titleImg" alt="" src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" />
                        <span className="titleInfo">如何成为签约作者</span>
                    </div>
                    {
                        cardList.map((item,index)=>(
                            <Card data={item} key={index}></Card>
                        ))
                    }
                </div>
                <div className="loadMore" onClick={getLoadAuthor}>加载更多</div>
            </AuthorWrapper>
        )
    }
    componentDidMount(){
        this.props.AuthorList();
    }

}

const mapState = (state) =>({
    cardList:state.getIn(['author','cardList'])
})

const mapDispatch = (dispatch) => ({
    AuthorList(){
        dispatch(actionCreatos.getAuthorList());
    },
    getLoadAuthor(){
        dispatch(actionCreatos.getMoreAuthor());
    }
})
export default connect(mapState,mapDispatch)(AllAuthor);