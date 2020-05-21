import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './Style.css'
class Welcome extends Component {
    render() {
        return (
                <div className = 'wrapper'>
                
                
                    
                  <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                    <ul className='navbar-nav'>
                        
                            <h1>WELCOME TO SPLIT-BILL APP</h1>
                        
                    </ul>
                </nav>
                <div className='form-wrapper'>
                    <div className='btns'>
                        <button className='signupbutton' ><Link to='/signin'>Signin</Link>  </button>
                        <button className='signinbutton' ><Link to='/signup'>Signup</Link></button>
                    </div>
                </div>
                </div>
                

        );
    }
}
export default Welcome