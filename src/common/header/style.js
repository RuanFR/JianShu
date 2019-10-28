import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index:1;
    // position:relative;
    height:56px;
    width:100vw;
    border-bottom:1px solid #f0f0f0;
    position:fixed;
    top:0;
    background:#fff;
`

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0px 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    padding: 0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;  //因为设置了padding就会变成宽度200设置这个属性就不会变了
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.slide-enter{
        // width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    &.focused{
        width:240px;
        .iconfont{
            background:
        }
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    border-radius:4px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block; //只有块级样式才能旋转
        float:left;
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform: rotate(50deg);
        transform-origin: center center;
    }
    .switch{
        font-size:14px;
        color:#969696;
        line-height:20px;
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`

export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    font-size:12px;
    padding: 0 5px;
    margin: 0 10px 15px 0;
    line-height:20px;
    border: 1px solid #ddd;
    color:#787878;
    border-radius: 3px;
`
export const SearchTriangle = styled.div`
    position:absolute;
    top:-19px;
    border-color:transparent transparent #fff transparent;
    border-style:solid dashed dashed dashed;
    border-width: 10px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    line-height:38px;
    padding:0 20px;
    border-radius:19px;
    border: 1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`
