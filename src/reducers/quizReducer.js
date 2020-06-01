import { FETCH_QUESTION, FETCH_NEXT_QUESTION } from '../actions/types';

const initialState = {
    ques: null,
    answer: ''
};

export default function( state = initialState, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            // console.log(action.payload);
            return {
                ...state,
                ques: action.payload
            }
        case FETCH_NEXT_QUESTION:
            // console.log('Fetched Next Question:',action.payload);
            return {
                ...state,
                ques: action.payload
            }
        default :
            return state;
    }
}