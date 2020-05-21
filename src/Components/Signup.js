import React, { Component } from 'react'  
import { Link } from 'react-router-dom'


const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const formValid = ({formErrors, ...rest})=> {
  let valid = true;
  Object.values(formErrors).forEach(val =>{val.length > 0 && (valid= false);
  });
  Object.values(rest).forEach(val =>{
    val && (valid=false)
  });
  return valid;
};
class Signup extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       firstName:null,
       lastName:null,
       email:null,
       password:null,
       formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        password:""
       }
    };
  }
  handleSubmit=e=>{
    e.preventDefault();
    if(formValid(this.state.formErrors)){
      console.log(`
      --submitting--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email ID: ${this.state.email}
      Password: ${this.state.password}
      `)
    }else{
      console.error("Form INVALID - DISPLAY ERROR MESSAGE");
    }
    
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;
    switch(name){
      case 'firstName':
        formErrors.firstName = value.length<3  ?"minimum 3 characters required":"";
        break;
        case 'lastName':
        formErrors.lastName = value.length<3 ?"minimum 3 characters required":"";
        break;
        case 'email':
        formErrors.email = emailRegex.test(value)?"":"Invalid email ID";
        break;
        case 'password':
        formErrors.password = value.length<8 ?"minimum 8 characters required":"";
        break;
        default:
        break;
    }
    this.setState({formErrors, [name]:value},()=>console.log(this.state))
  }

  
  render() {
    const {formErrors} =this.state;
    return (
      
      <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form className='signupform' onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input 
          className ={formErrors.firstName.length>0?"error":null }
          placeholder="First Name"
          type="text" 
          name="firstName" 
          noValidate
          onChange={this.handleChange}
          />
          {formErrors.firstName.length>0 && (
            <span className ="errorMessage">{formErrors.firstName}</span>
          )}
          </div>
          <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input  
          className ={formErrors.lastName.length>0?"error":null }
          placeholder="Last Name"
          type="text" 
          name="lastName" 
          noValidate
          onChange={this.handleChange}
          />
          {formErrors.lastName.length>0 && (
            <span className ="errorMessage">{formErrors.lastName}</span>
          )}
          </div>
          <div className="email">
          <label htmlFor="email">EmailID</label>
          <input 
          className ={formErrors.email.length>0?"error":null } 
          placeholder="Enter emailID"
          type="email" 
          name="email" 
          noValidate
          onChange={this.handleChange}
          />
          
          </div>
          <div className="password">
          <label htmlFor="password">Password</label>
          <input 
          className ={formErrors.password.length>0?"error":null }
          placeholder="Enter Password"
          type="password" 
          name="password" 
          noValidate
          onChange={this.handleChange}
          />
          {formErrors.password.length>0 && (
            <span className ="errorMessage">{formErrors.password}</span>
          )}
          </div>
          <div className="createAccount">
          <button type="submit"> Create Account </button> 
          <small><Link to='/signin'> Already Have an Account?Already Have an Account?</Link></small>
          
          </div>
        </form>

      </div>
    </div>
      
    );
  }
}

export default Signup

// import React, { Component } from 'react'
// import './Style.css';
// class Signup extends Component {
//     state = {
//         username: ' ',
//         email: '',
//         passsword: '',
//         retype: '',
//         usernameError:'',
//         emailError:'',
//         passowrdError:'',
//         retypeError:''
//     };
//     usernameFunction = (event) => {
//         const username = event.target.value;
//         this.setState({
//             username
//         });
//     };
//     emailFunction = (event) => {
//         const email = event.target.value
//         this.setState({
//             email
//         })
//     };
//     passwordFunction = (event) => {
//         const password = event.target.value;
//         this.setState({
//             password
//         })
//     };
//     retypeFunction = (event) => {
//         const retype = event.target.value;
//         this.setState({
//             retype
//         })
//     };
//     validate=()=>
//     {
//         let usernameError='';
//         let emailError='';
//         let retypeError='';
//         var nameregex=/^([a-z A-z]{3,25})$/;
//         var emailregx=/^([a-z A-z 0-9\.-]+)@([a-z]+).([a-z]{2,20})(.[a-z]{2,10})?$/;
//         if(!emailregx.test(this.state.email))
//         {
//             emailError='invallid';
//         } 
//         if(!nameregex.test(this.state.username))
//         {
//             usernameError='name should contain more than 3 characters';
//         }
//         if(emailError)
//         this.setState({emailError});
//         if(usernameError)
//         this.setState({usernameError});
//         if(this.state.password!=this.state.retype)
//         {
//             retypeError='invalid';
//         }
//         if(retypeError)
//         this.setState({retypeError})
//     }

//     handleSubmit=(event)=>
//     {
//         event.preventDefault();
//         let validate=this.validate();
//         if(validate)
//         {
//             console.log(this.state)
//         }

//     }
//     render() {
//         return (
//             <div className='form'>
//                 <form className='upform' onSubmit={this.handleSubmit}>
//                     <table className='table'>
//                         <tr>
//                             <td><label>UserName:</label></td>
//                             <td><input className='userinput' required='true' autoComplete='nope' type='text' value={this.state.username} onChange={this.usernameFunction} /></td>
//                         </tr>
//                         <div className='error'>{this.state.usernameError}</div>

//                         <tr>
//                             <td> <label>Email:</label></td>
//                             <td> <input className='emailinput' required='true' autoComplete='nope' type='text' value={this.state.email} onChange={this.emailFunction} /></td>
//                         </tr>
//                         <div className='error'>{this.state.emailError}</div>

//                         <tr>
//                             <td><label>Password:</label></td>
//                             <td> <input className='passwordinput' required='true' autoComplete='nope' type='password' value={this.state.password} onChange={this.passwordFunction} /></td>    
//                         </tr>
//                         <div className='error'>{this.state.passowrdError}</div>

//                         <tr>
//                             <td> <label>Retype-Password:</label></td>
//                             <td> <input className='retypeinput' required='true' autoComplete='nope' type='password' value={this.state.retype} onChange={this.retypeFunction} /></td>
//                         </tr>
//                         <div className='error'>{this.state.retypeError}</div>
//                     </table>
//                     <input type='submit' />
//                 </form>
//                 <script>
             
                 
//              </script>
//             </div>
           
           
//         );
//     }
//   }
//         export default Signup
