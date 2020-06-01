import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/result.css';

class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score: -1,
            questions: []
        }
    }
    componentDidMount(){
        // console.log('Result', this.props.result);
    }

    componentWillReceiveProps(np, pev) {
        if(this.state.score != np.result.result.score){
            if(np.result.result != null) {
                this.setState({
                    score: np.result.result.score,
                    questions: np.result.result.questions
                })
            }
        }
    }

    createList = item => {
        let itemstyle = '';
        if(item.flag) itemstyle = 'correctans questionrow p-4 m-1 mb-5 shadow text-center';
        else itemstyle = 'wrongans questionrow p-4 m-1 mb-5 shadow text-center';
        return <li className= 'listLi' key={item.no} >
            <div className={itemstyle} >
                {item.question}
            </div>
        </li>
    }

    render(){
        const listItems = this.state.questions.map(this.createList);
        return(
            <div style={{height:'89vh'}}>
                <div className="d-flex justify-content-center mt-2"><h4 className="display-4">Result</h4></div>
                <div className="progress mt-2 ml-5 mr-5 mb-2" style={{height:`10vh`}}>
                    <div className="progress-bar" style={{width: this.state.score < 0? 0: parseInt(this.state.score)*100/15 + '%'}}><span className="text-white font-weight-bold" style={{fontSize:'18px'}}>{this.state.score < 0? 0: Math.ceil(parseInt(this.state.score)*100/15)} %</span></div>
                </div>
                <ul className="theList mt-4 mr-5 ml-5" style={{scrollbarWidth: 'none', overflowY: 'scroll', height: '55vh', msOverflowStyle: 'none'}}>{listItems}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    result: state.result
});

export default connect(mapStateToProps,null)(Result);