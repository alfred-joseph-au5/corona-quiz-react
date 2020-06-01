import React, { Component } from 'react';
import './App.css';
import './styles/main.css';
import { BrowserRouter, Route,Redirect} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TopBar from './components/TopBar';
import LandingPage from './components/LandingPage'
import Auth from './components/Auth';
import Quiz from './components/Quiz';
import Result from './components/Result';

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render = {()=>(
//     false
//     ? <Component/>
//     : <Redirect to='/auth' />
//   )} />
// )

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <TopBar />
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <PrivateRoute exact path="/quiz" component = {Quiz} />
          {/* <Quiz />
        </PrivateRoute> */}
        <PrivateRoute exact path="/result" component = {Result} />
        {/* <Route exact path="/result">
          <Result />
        </Route> */}
      </BrowserRouter>
    );
  }
}

export default App;
