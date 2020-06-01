import React, { Component } from 'react';
import bg from '../img/lp-bg.jpg';
import '../styles/landingpage.css'
import {Link} from 'react-router-dom';

class LandingPage extends Component{
    render(){
        return(
            <div className="landingPageBg" style={{backgroundImage:`url(${bg})`}}>
                <div className="d-flex justify-content-center align-items-end" style={{height:`inherit`, width:'99vw'}}>
                    <Link to="/auth">
                        <button type="button" className="rounded-3 btn btn-warning m-3 btn-lg font-weight-bold">Take The Quiz</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;