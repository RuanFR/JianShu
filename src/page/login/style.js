import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height:100vh;
    min-height:750px;
    text-align:center;
    background:#f1f1f1;
    box-sizing:border-box;
    font-size:14px;
    box-sizing:border-box;
    .Logo{
        display:block;
        position:absolute;
        top:56px;
        margin-left: 50px;
    }
`

export const LoginBox = styled.div`
    width:400px;
    // height:180px;
    padding:50px 50px 30px;
    margin: 100px auto 0;
    border-radius:4px;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    box-sizing:border-box;
    vertical-align:middle;
    display:inline-block;
    .title{
        margin:0 auto 50px;
        padding:10px;
        color:#969696;
    }
    b{
        padding:10px;
        font-weight:700;
    }
    .sign_register{
        padding:10px;
        color:#969696;
        font-size:18px;
        font-weight:400;
    }
    .changeStyle{
        border-bottom:2px solid #ea6f5a;
        color:#ea6f5a;
        font-weight:700;
    }
`

export const Input = styled.input.attrs({
    placeholder: props => props.title
})`
    background:${props => props.background || "#e5eefe"};
    border:1px solid #c1c1c1;
    width:300px;
    height:50px;
    line-height:30px;
    padding: 0 10px;
    color: #777;
`

export const Button = styled.div`
    width:300px;
    height:43px;
    line-height:43px;
    color: #fff;
    background:${props => props.index === 1? "#3ab829" : "#3194d0"};
    border-radius: 25px;
    margin 10px auto;
    text-align: center;
    display:inline-block;
    cursor:pointer;
`

export const FromView = styled.div`
    width:300px;
    margin-bottom:30px;
    box-sizing:brder-box;
    background:red;
`