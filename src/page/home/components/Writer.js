import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    UserTitle,
    FindMore
} from '../style';

import {
    SearchInfoSwitch
} from '../../../common/header/style';
import { list } from './test';
import { Link } from 'react-router-dom'

class Writer extends PureComponent{

    render(){
        let { handleChangePage} = this.props;
        return(
            <WriterWrapper>
                <span className="author">推荐作者</span>
                <SearchInfoSwitch onClick={()=>handleChangePage(this.spinIcon)}>
                <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                <span className="switch">换一批</span>
                </SearchInfoSwitch>
                {list.map((item)=>(
                    <UserTitle key={item.id}>
                        <img alt="" src={item.img} />
                        <div className="userInfo">
                            <p>{item.userName}</p>
                            <span>写了{item.write}字·{item.like}喜欢</span>
                        </div>
                        <div className="follow">+关注</div>
                    </UserTitle>
                ))}
                <Link to="/allAuthor">
                    <FindMore>查看全部 ></FindMore>
                </Link>

            </WriterWrapper>
        )
    }
}

const mapDispathToProps = (dispatch) => ({
    handleChangePage(spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle){
            originAngle = parseInt(originAngle, 10);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate('+(originAngle + 360 )+'deg)';
    }
})

export default connect(null,mapDispathToProps)(Writer);