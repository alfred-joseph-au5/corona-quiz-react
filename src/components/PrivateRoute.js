import React, {Component, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ADD_STATUS} from '../actions/types';

// class PrivateRoute extends Component {
//   render() {
//     let Comp = this.props.component
//     let {rest} = this.props
    
//     return(
//       <Route {...rest} render = {()=>(
//             false
//             ? <Comp/>
//             : <Redirect to='/auth' />
//           )} />
//     );
//   }
// }
const PrivateRoute = ({component: Component, ...rest}) => {
  // console.log('PrivateRoute');
  
 const data = useSelector(state => state);
//  console.log('Private Route Updated');
 
//  console.log(data.auth.authStatus);
 
//  const dispatch = useDispatch();
//  let flag = (data.auth.usn.length != 0 && data.auth.email.length!=0) || data.auth.authStatus;
//  flag ? 
// console.log(rest);
// if(data.auth.authStatus) {
//   data.
// }
// console.log(data.auth.authStatus)
 return(
  <Route {...rest} render = {()=>(
      data.auth.authStatus
      ? <Component/>
      : <Redirect to='/auth' />
  )}
  />
 );
}
export default PrivateRoute;