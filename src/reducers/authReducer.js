import {ADD_NAME, ADD_EMAIL, ADD_STATUS} from '../actions/types';

const initialState = {
    usn: '',
    email: '',
    authStatus: localStorage.getItem('authStatus') || false
};

export default function( state = initialState, action) {
    switch(action.type) {
        case ADD_STATUS:
            localStorage.setItem('authStatus', action.payload.authStatus);
            // console.log('Reducer updated!');
            
            return {
                ...state,
                usn: action.payload.usn,
                email: action.payload.email,
                authStatus: action.payload.authStatus
            }
        case ADD_NAME:
            return {
                ...state,
                usn: action.payload
            }
        case ADD_EMAIL: 
            return {
                ...state,
                email:action.payload
            }
        default :
            return state;
    }
}