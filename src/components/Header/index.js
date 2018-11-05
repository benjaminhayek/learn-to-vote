import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component{
    constructor(){
        super()
    }

    render(){
        const { pathname } = window.location;
        const senators = pathname !== '/senators';
        return(
            <div className='header'>
                <h1 className='header-title'>Learn to Vote</h1>
                {
                    senators &&
                    <Link to='/senators' >
                        <button>Click here to see senators</button>
                    </Link>
                }
                {
                    !senators && 
                    <Link to='/' >
                        <button>Click here to see congressmen</button>
                    </Link>
                }
            </div>
        )
    }
}

export default Header;