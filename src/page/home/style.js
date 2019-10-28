import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin: 56px auto 0;
    p{
        margin:0;
    }
`;

export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
        cursor: pointer;
    }
    //骨架屏样式
    .ant-skeleton{
        margin-bottom:30px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
    position:relative;
    a{
        text-decoration: none; 
    }
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left: -10px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    background: #f7f7f7;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    font-size:14px;
    border:1px solid #dcdcdc;
    color:#000;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        widdth:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:5px;
    }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color:#999;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0 6px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background-image:url(${props => props.imgUrl});
    background-size:contain;
`;

export const WriterWrapper = styled.div`
    width:278px;
    height:300px;
    .author{
        font-size:14px;
        color:#969696;
    }
    .spin{
        color:#969696;
        line-height:20px;
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    cursor: pointer;
    color:#fff;
`

export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:30px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
`

export const Menu = styled.div`
    margin-top:8px;
    display:flex;
    font-size:12px;
    line-height:16px;
    .Num{
        color:#e35847;
        padding-right:10px;
    }
    .name{
        padding-right:10px;
        color:#b4b4b4;
    }
`

export const Extension = styled.div`
    border:1px solid #dcdcdc;
    border-radius:6px;
    height:82px;
    width:280px;
    margin-bottom:30px;
    box-sizing:border-box;
    padding: 10px 22px;
    display:flex;
    align-items:center;
    .QRcode{
        height:60px;
        width:60px;
    }
    .brief{
        margin-left:7px;
        height:43px;
        width:143px;
        display:flex;
        flex-direction:column;
        .addWechat{
            font-size:15px;
            color:#333;
            flex:2;
            line-height:21px;
        }
        .anyway{
            margin-top:4px;
            font-size:13px;
            color:#999;
            flex:2;
            line-height:21px;
        }
    }
`
export const Popup = styled.div`
    // height:150px;
    // width:150px;
    background:#fff;
    position:absolute;
    top:75px;
    border:1px solid #999;
    border-radius:6px;
    box-sizing:border-box;
    padding:15px;
    box-shadow: 0px 10px 5px #d9d9d9;
    left:50%;
    transform:translateX(-50%);
    .triangle{
        position:absolute;
        height:0;
        width:0;
        overflow: hidden;
        border-color:#fff transparent transparent transparent;
        border-style:solid;
        border-width:10px;
        bottom:-20px;
        left:50%;
        transform:translateX(-50%);
    }
    img{
        height:100%;
        width:100%;
    }
`
export const UserTitle = styled.div`
    overflow:hidden;
    margin-top:15px;
    img{
        float:left
        border-radius:50%;
        height:48px;
        width:48px;
        margin-right:10px;
    }
    .userInfo{
        float:left;
        display:flex;
        flex-direction:column;
        justify-content:center;
        p{
            font-size:14px;
            line-height:25px;
        }
        span{
            display:block
            margin-top:2px;
            font-size:12px;
            color:#969696;
        }
    }
    .follow{
        float:right;
        margin-top:5px;
        padding:0;
        font-size:13px;
        color:#42c02e;
        font-weight:400;
    }
`

export const FindMore = styled.div`
    border:1px solid #dcdcdc;
    color:#787878;
    background:#f7f7f7;
    font-size:13px;
    text-align:center;
    line-height:34px;
    border-radius:4px;
    margin-top:20px;
`