import { FETCH_QUESTION, FETCH_NEXT_QUESTION } from './types';

export const fetchQuestion = () => dispatch => {
    // console.log('inside action');
    
    const res = fetch("https://corona-whiz-api.herokuapp.com/question",{
        credentials:'include'
    })
    res.then(res => res.json())
    .then(data => {
        // console.log(data);
        
      dispatch({
          type: FETCH_QUESTION,
          payload: data
      })  
    });
}

export const fetchNext = (data) => dispatch => {
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
            type: FETCH_NEXT_QUESTION,
            payload: data
        })
    })
}