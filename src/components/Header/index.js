import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='header'>
                <h1 className='header-title'>Learn to Vote</h1>
            </div>
        )
    }
}

export default Header;