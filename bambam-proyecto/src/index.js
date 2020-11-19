import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }
  
  syncEmailChanges(email){
    console.log(email);
    this.setState({
      email: email
    })

  }

  render(){
    return (
      <form>
        <input 
          onChange={(ev)=> {this.syncEmailChanges(ev.target.value)}}
          type="email" 
          value={this.state.email} 
          placeholder="Email"/>
        <input 
          type="password" 
          value={this.state.password} 
          placeholder="******"/>
        <div>
        <input type="submit" value="Iniciar Sesión"/>
        </div>
      </form>  
    )
  }
}
 
render(<App />, document.getElementById("root"));
