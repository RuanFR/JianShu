import styled from 'styled-components';

export const AuthorWrapper = styled.div`
    width:100%;
    padding-bottom:50px;
    box-sizing:border-box;
    .content{
        margin:0 auto;
        overflow:hidden;
        width:990px;
        display:flex;
        flex-wrap: wrap;
        .header-title{
            position:relative;
            margin-top:30px;
            width:960px;
            margin:30px auto 0;
        }
        .titleImg{
            height:100px;
            width:960px;
        }
        .titleInfo{
            position:absolute;
            line-height:100px;
            color:#fff;
            right:30px;
            cursor:pointer;
        }
        .titleInfo:hover{
            text-decoration: underline; 
        }
    }
    .loadMore{
        display:bloack;
        width:367px;
        height:41px;
        line-height:41px;
        text-align:center;
        fnot-size:15px;
        color:#fff;
        border-radius:20px;
        background:#a5a5a5;
        margin:40px auto;
        cursor:pointer;
    }
`

export const CardWrapper = styled.div`
    box-sizing:border-box;
    height:320px;
    margin-top:80px;
    width:300px;
    border:1px solid #e6e6e6;
    background-color:#f7f7f7;
    margin:80px 15px 0px;
    text-align:center;
    padding:0 20px;
    :hover{
        box-shadow: 0px 0px 5px #888888;
    }
    img{
        height:80px;
        width:80px;
        margin:-40px 0 10px;
        border-radius:40px;
        cursor:pointer;
    }
    .author-Name{
        font-size:21px;
        font-weight:700;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin:10px 0;
    }
    .introduce{
        font-size:13px;
        line-height:25px;
        min-height:50px;
        max-width:180px;
        margin:0 auto 10px;
    }
    .follw-btn{
        margin:0 auto;
        line-height:40px;
        text-align:center;
        font-size:16px;
        border-radius:40px;
        background:#42c02e;
        color:#fff;
        width:100px;
        cursor:pointer;
    }
    hr{
        margin:20px 0;
        border:0;
        border-top:1px solid #eee;
        height:0;
        border-sizing:border-box;
    }
    .lately{
        float:left;
        margin-top:-29px;
        padding-right:10px;
        font-size:12px;
        color:#969696;
        border-sizing:border-box;
        background:#f8f8f8;
    }
    .bottom-content{
        min-height:75px;
        a{
            text-decoration: none;
            color: #333;
            font-size: 13px;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
    }
`