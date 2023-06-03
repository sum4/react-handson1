import React from 'react';
import './App.css';
import FunComp from './FunComp';
import ClassComp from './ClassComp';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      functionClick : false,
      classClick : false
    }
  }

  render(){
    return (
      <div className="App">
        <h1 id='heading'>Styling using Functional and Class Component</h1>
        <button className='btn' onClick={()=>this.setState({functionClick : ! this.state.functionClick})}>to see styling in functional Component</button>
        <button className='btn' onClick={()=>this.setState({classClick : ! this.state.classClick})}>to see styling in class Component</button>
  
        {this.state.functionClick && <FunComp />}
        {this.state.classClick && <ClassComp />}
      </div>
    );
  }
 
}

export default App;
