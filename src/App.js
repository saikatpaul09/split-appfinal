import React from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//import Navcomponent from './Components/Navcomponent';


function App() {
  return (
    <Router>
       <div className="App">
       <Switch>
           <Route exact path='/' component ={Welcome}></Route>
           <Route path='/signup' component ={Signup}></Route>
           <Route path='/signin' component ={Signin}></Route>
           
         </Switch>
         
      </div>
    </Router>
     
   

  );
}

export default App;