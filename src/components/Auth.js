import React, { Component } from 'react';
import bg from '../img/auth-bg.jpg'
import '../styles/auth.css';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { authCreate, addName, addEmail } from '../actions/auth.action';
import {bindActionCreators} from 'redux';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            status: false,
            redir: false
        }
    }
    componentDidMount() {
        // if(this.state.name.trim().length == 0 || this.state.name.trim().length == 0)
        this.props.authCreate({
            usn: '',
            email: ''
        });
        this.setState({
            name: this.props.auth.usn,
            email: this.props.auth.email,
            status: this.props.auth.authStatus
        })
    }

    render(){
        if(this.state.redir === true){
            return <Redirect to= '/quiz' />
        }
        return(
            <div>
                <div className="authbg img-thumbnail img-fluid position-relative" style={{backgroundImage:`url(${bg})`}}>
                <div className="position-absolute" style={{height:`inherit`}}>
                    <div className="d-flex justify-content-start align-items-center pl-5" style={{height:`inherit`, width:'99vw'}}>
                        <div className="d-block p-0 m-0">
                            <form className='form-group' onSubmit={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.authCreate({
                                    usn: this.state.name,
                                    email: this.state.email
                                },this.setState({
                                    redir: true
                                }));
                                
                            }}>
                                <div className="form-group float-center p-0 d-block">
                                    <input type="text" pattern="^[a-zA-Z]+.{2,}$" className="form-control" id="name" placeholder="Enter Name" name="name" required value={this.state.name}
                                        onChange={(event) => this.setState({
                                            name: event.target.value
                                        })}/>
                                </div>
                                <div className="form-group float-center p-0 m-0 d-block">
                                    <input type="email" pattern="^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" className="form-control" id="email" placeholder="Enter Email" name="email" required value={this.state.email}
                                        onChange={(event) => this.setState({
                                            email: event.target.value
                                        })} />
                                </div>
                                <button type="submit" className="rounded-3 btn btn-warning mt-4 mb-4 font-weight-bold">Start Quiz</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center p-2 m-3">
                <span>Please provide your name and email to continue. We won't mail you.</span>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addEmail, addName, authCreate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);