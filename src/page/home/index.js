import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { Link } from 'react-router-dom';
import MeCode from '../../statics/MeCode.png';
// import { CSSTransition } from 'react-transition-group';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    Extension,
    Popup
} from './style';
import  * as actionCreatos from './store/actionCreators';


class Home extends PureComponent{

    handleScrollTop=()=>{
        console.log(window.scrollTo(0,0));
        window.scrollTo(0,0);
    }
    popup=()=>{
        return(
            <Popup>
                <img alt="" src={MeCode} />
                <div className="triangle"></div>
            </Popup>
        )
    }

    render(){
        const { showScrool,showPopup,homeMouseShow,homeMouseHide } = this.props; 
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="https://rfr1234567890-1258757821.cos.ap-shanghai.myqcloud.com/testImg/%E9%85%8B%E9%95%BF%E5%B2%A9.jpg" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    {showPopup ? this.popup():null}
                    <Link to="/login" target="_blank" onMouseEnter={homeMouseShow} onMouseLeave={homeMouseHide} className="test">
                        <Extension>
                            <img alt="" className="QRcode" src={MeCode} />
                            <div className="brief">
                                <p className="addWechat">扫描加微信  ></p>
                                <p className="anyway">随时随地发现和创作内容</p>
                            </div>
                        </Extension>
                    </Link>
                    <Writer />
                </HomeRight>
                { showScrool ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        document.title = '简书 - 创作你的创作'
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

// const mapState = (state) => ({
//     showScrool:state.getIn(['home','showScrool']),
//     showPopup:state.getIn(['home','showPopup'])
// })

const mapState = (state) => ({
    showScrool:state.getIn(['home','showScrool']),
    showPopup:state.getIn(['home','showPopup'])
})

const mapDispatch = (dispatch) =>({
    changeHomeData(){
        dispatch(actionCreatos.getHomeInfo());
    },
    changeScrollTopShow(e){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreatos.toggleTopShow(true))
        }else{
            dispatch(actionCreatos.toggleTopShow(false))
        }
    },
    homeMouseShow(){
        dispatch(actionCreatos.homePopupShow())
    },
    homeMouseHide(){
        dispatch(actionCreatos.homePopupHide());
    }
})
export default connect(mapState,mapDispatch)(Home);