import { ADD_NAME, ADD_EMAIL, ADD_STATUS, ADD_DATA} from './types';

export function addName(data) {  
    return({
      type:ADD_NAME,
      payload: data
    });
}

export function addEmail(data) {  
    return({
      type:ADD_EMAIL,
      payload: data
    });
}

export const authCreate = (data) => dispatch => {    
    const res = fetch("https://corona-whiz-api.herokuapp.com/auth", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
            credentials: 'include'
        });
    res.then(res => {
        res.ok? data['authStatus']=true : data['authStatus']=false;
        dispatch({
            type: ADD_DATA,
            payload: data
        })
        }
    )
}

export const authPing = (data) => dispatch => {    
    const res = fetch("https://corona-whiz-api.herokuapp.com/auth", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
            credentials: 'include'
        });
    res.then(res => {
        res.ok? 
            dispatch({
                type: ADD_STATUS,
                payload: true
            }) : 
            dispatch({
                type: ADD_STATUS,
                payload: false
            })
        }
    )
}

export const authDestroy = (data) => dispatch => {    
    const res = fetch("https://corona-whiz-api.herokuapp.com/auth", {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            credentials: 'include'
        });
    res.then(res => {
        data['usn'] = ''
        data['email'] = ''
        res.ok? data['authStatus']=false : data['authStatus']=true;
        dispatch({
            type: ADD_DATA,
            payload: data
        })
        }
    )
}