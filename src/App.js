import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { GlobalStyled } from './style';
import Header from './common/header/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './page/detail';
import Home from './page/home';
import Login from './page/login';
import Write from './page/write';
import AllAuthor from './page/AllAuthor';
import Article from './page/Article';
import Download from './page/Download';


// function App(state) {
//   console.log('----');
//   return (
//     <>
//       <GlobalStyled /> 
//       <BrowserRouter>
//         {state.state.getState().getIn(['login','showHeader']) ? <Header />:null}
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//         <Route path='/detail/:id' exact component={Detail}></Route>
//         <Route path='/write' exact component={Write}></Route>
//         <Route path='/allAuthor' exact component={AllAuthor}></Route>
//         <Route path='/article' exact component={Article}></Route>
//       </BrowserRouter>
//     </>
//   );
// }

class App extends PureComponent{
  render(){
    console.log(Download)
    return(
      <>
      <GlobalStyled /> 
      <BrowserRouter>
        {this.props.showHeader ? <Header />:null}
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/allAuthor' exact component={AllAuthor}></Route>
        <Route path='/article' exact component={Article}></Route>
        <Route path='/download' exact component={Download}></Route>
      </BrowserRouter>
    </>
    )
  }
}

const mapState = (state) =>({
  showHeader:state.getIn(['login','showHeader'])
})

export default connect(mapState,null)(App);;
