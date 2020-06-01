import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quizReducer from './quizReducer';
import resultReducer from './resultReducer';

const rootReducer =  combineReducers({
    auth: authReducer,
    ques: quizReducer,
    result: resultReducer
});

export default rootReducer;