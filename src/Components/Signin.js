import React, { Component } from 'react';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    };
    handleemail = (event) => {
        const email = event.target.value;
        this.setState({ email })
    }
    handlepassword = (event) => {
        const password = event.target.value;
        this.setState({ password })
    }
    validate=()=>
    {
        if(this.state.email=='paulsaikat038@gmail.com' && this.state.password=='1@!')
        {
           alert('corect')
        }
    }
    render() {

        return (
            <div className = "wrapper">
            <div className="form-wrappers">
            
                
                <form  onSubmit={this.validate}>
                    <table>
                        <h1>SIGN IN</h1>
                        <tr>
                        <div className='email'>
                            <td><label><b>Email</b></label></td>
                                <td><input type='text' value={this.state.email} onChange={this.handleemail} /></td>
                                </div>
                        </tr>
                        
                         <tr>
                            <div className='password'>
                            <td><label><b>Password</b></label></td>
                            <td><input type='password' value={this.state.password} onChange={this.handlepassword} /></td>
                            </div>
                        </tr>
                    </table><br/>
                    <input type='submit' value='login'/>


                </form>
            
            </div>
            </div>
        );
    }
}
export default Signin
