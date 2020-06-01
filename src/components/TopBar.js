import React, { Component } from 'react';

class TopBar extends Component {
    render(){
        return(
            <div className='topbar'>
                <div className="d-flex justify-content-center" style={{height:`inherit`, width:'100vw'}}>
                    <h2 className="text-white mt-1">Corona Quiz</h2>
                </div>
            </div>
        );
    }
}

export default TopBar;