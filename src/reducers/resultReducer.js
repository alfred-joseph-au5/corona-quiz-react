import { FETCH_RESULT } from '../actions/types';

const initialState = {
    result: null
};

export default function( state = initialState, action) {
    switch(action.type) {
        case FETCH_RESULT:
            // console.log(action.payload);
            return {
                ...state,
                result: action.payload
            }
        default :
            return state;
    }
}