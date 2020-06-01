import { FETCH_RESULT } from './types';

export const fetchResult = (data) => dispatch => {
    fetch('https://corona-whiz-api.herokuapp.com/answer',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(res=>res.json())
    .then(data => {
        dispatch({
            type: FETCH_RESULT,
            payload: data
        })
    })
}