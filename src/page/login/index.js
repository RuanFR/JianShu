import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
    FromView
} from './style';
import { Link } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import {
    message
} from 'antd';

class Login extends PureComponent{


    render(){
        const { loginStatus,login,changeTitle,titleIndex, inputData } = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <Link to="/">
                        <img className="Logo" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" />
                    </Link>
                    <LoginBox>
                        <h4 className="title">
                            <div className="normal-title">
                                <Link alt="" to="/" className={titleIndex === 0 ?"sign_register changeStyle":"sign_register"} onClick={(e)=>{changeTitle(0,e)}
                                    }>登陆</Link>
                                <b>·</b>
                                <Link alt="" to="/" className={titleIndex === 1 ?"sign_register changeStyle":"sign_register"} onClick={(e)=>changeTitle(1,e)}>注册</Link>
                            </div>
                        </h4>
                        <FromView>
                            
                        </FromView>
                        <Input title='账号' onChange={(e)=>{inputData(e)}} ref={(input) => {this.account = input}}/>
                        {titleIndex === 0 ? null : <Input title='手机号' onChange={(e)=>{inputData(e)}} style={{"borderTop":"none"}} background="#f7f7f7" ref={(input) => {this.phone = input}}/>}
                        <Input style={{"borderTop":"none"}} onChange={(e)=>{inputData(e)}} title='密码' ref={input => this.password = input} type="password" />
                        <Button onClick={() => login(this.account,this.password,this.phone,titleIndex)} index={titleIndex}>{titleIndex === 0 ? "登陆" : "注册"}</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
        
    }
    componentDidMount(){ 
        document.title = '登陆 - 简书'
        this.props.hideHeader();
    }

    componentWillUnmount(){
        this.props.showHeader();
    }
}

const mapState = (state) =>({
    loginStatus:state.getIn(['login','login']),
    titleIndex:state.getIn(['login','titleIndex',])
})

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem,phoneElem,index){
        let account = accountElem.value;
        let password = passwordElem.value;
        let phone;
        if(index === 1){
            phone = phoneElem.value;
            if(!account){
                message.error('输入不能为空');
                return;
            }
            if(!password){
                message.error('输入不能为空');
                return;
            }
            if(!phone){
                message.error('输入不能为空');
                return;
            }
            return;
        }
        if(!account){
            message.error('输入不能为空');
            return;
        }
        if(!password){
            message.error('输入不能为空');
            return;
        }

        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    },
    hideHeader(){
        dispatch(actionCreators.hide());
    },
    showHeader(){
        dispatch(actionCreators.show())
    },
    changeTitle(index,e){
        e.preventDefault()
        dispatch(actionCreators.nowTitle(index))
    },
    inputData(e){
        if(/ /.test(e.target.value)){
            e.target.value = '';
            console.log('asfafd')
            return;
        }
        console.log(e.target.value.length);
    }
})
export default connect(mapState,mapDispatch)(Login);