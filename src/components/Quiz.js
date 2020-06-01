import React, { Component } from 'react';
import bg from '../img/quiz-bg.jpg';
import '../styles/quiz.css';
// import {Link} from 'react-router-dom';
import { fetchQuestion, fetchNext } from '../actions/quiz.action';
import { fetchResult } from '../actions/result.action';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Quiz extends Component{
    constructor(props) {
        super(props);

        this.state = {
            redir: 0,
            guess: '',
            options:[false,false,false,false]
        }
    }
    componentDidMount(){
        // console.log('Quiz');
        if(this.props.question.ques == 'Not Authenticated!') {
            this.setState({
                redir: -1
            })
        } else {
            this.setState({
                redir:0
        })  
        }   
    }
    
    getNextQuestion = () => {
        if(this.props.question.ques.no == 15) {
            this.props.fetchResult({answer: (this.state.guess == '' ? 'wrong' : this.state.guess) });
            this.setState({
                redir: 1
            })
        }
        this.props.fetchNext({answer: (this.state.guess == '' ? 'wrong' : this.state.guess) });
    }

    setupQuestion = (item) => {
        // console.log('Item is empty?',item);
        
        const selectedoption = 'selectedoptions optionsprops p-3 m-1 shadow text-center w-75';
        const normaloption = 'normaloptions optionsprops p-3 m-1 shadow text-center w-75';
        return  <div className="d-flex justify-content-center flex-wrap">
                    <h2 className="questionno font-weight-bold p-1 m-1 mt-5 text-center w-100">{'Question ' + item.no}</h2>
                    <h4 className="p-1 m-2 text-center w-100">{item.question}</h4>
                    <a href="#" onClick={()=>{this.setState({guess:item.options[0]})}} className={this.state.guess === item.options[0] ? selectedoption: normaloption}>{item.options[0]}</a>
                    <a href="#" onClick={()=>{this.setState({guess:item.options[1]})}} className={this.state.guess === item.options[1] ? selectedoption: normaloption}>{item.options[1]}</a>
                    <a href="#" onClick={()=>{this.setState({guess:item.options[2]})}} className={this.state.guess === item.options[2] ? selectedoption: normaloption}>{item.options[2]}</a>
                    <a href="#" onClick={()=>{this.setState({guess:item.options[3]})}} className={this.state.guess === item.options[3] ? selectedoption: normaloption}>{item.options[3]}</a>
                    <button type="button" onClick={this.getNextQuestion} className="p-2 m-1 mt-3 font-weight-bold btn btn-primary w-25">Next</button>
                </div>
    }
    render(){
        if(this.state.redir == -1){
            return <Redirect to= '/auth' />
        } else if(this.state.redir == 1){
            return <Redirect to='/result' />
        }
        return(
            <div className="d-flex">
                <div className="quizbg" style={{backgroundImage:`url(${bg})`}}>
                </div>
                <div className="quizarea" style={{backgroundColor:`#EAEBEC`}}>
                    {(this.props.question.ques != null && this.props.question.ques != 'Not Authenticated!') ?
                    this.setupQuestion(this.props.question.ques):
                    this.props.fetchQuestion() }
                </div>                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    question: state.ques
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchQuestion, fetchNext, fetchResult},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);