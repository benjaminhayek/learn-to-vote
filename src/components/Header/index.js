import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debatePic from '../../utils/assets/debate2.svg';
import './Header.css';

export class Header extends Component{

    render(){
        const { pathname } = window.location;
        const senators = pathname !== '/senators';
        return(
            <div className='header'>
                <h1 className='header-title'>Get Educated on Education!</h1>
                {
                    senators &&
                    <Link to='/senators' >
                        <button className='switch'><img className='debate-pic' alt='debate-pic' src={debatePic}/>
                            <h2 className='instructs'>Click here to see senators</h2>
                        </button>
                    </Link>
                }
                {
                    !senators && 
                    <Link to='/' >
                        <button className='switch'><img className='debate-pic' alt='debate-pic' src={debatePic}/>
                            <h2 className='instructs'>Click here to see congressmen</h2>
                        </button>
                    </Link>
                }
            </div>
        )
    }
}

export default Header;