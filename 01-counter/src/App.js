import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    counter: 0,
    color: 'blue-text'
  }
  
  verifyNegativeNumber = () => {
    if(this.state.counter < 0) {
      this.setState({ color: 'red-text' })      
    }
    else {
      this.setState({ color: 'blue-text' })      
    }
  }

  counterIncrement = () => {    
    this.setState({
      counter: this.state.counter+1
    })    
    this.verifyNegativeNumber()
  }
  counterDecrement = () => {    
    this.setState({
      counter: this.state.counter-1
    })    
    this.verifyNegativeNumber()
  }

  clear = () => {    
    this.setState({
      counter: 0
    })
    this.verifyNegativeNumber()
  }

  render() {
    return (
      <main className="App container">
        <div className="row">
          <div className="col l8 offset-l2">
            <div className="card-panel card-item">
              <div className="row">
                <div className="col s12 text-center">
                  <h3 htmlFor="">Contador: <strong className={this.state.color}>{this.state.counter}</strong></h3>
                  <button className="btn waves-effect red" onClick={this.counterDecrement}>-1</button>&nbsp;&nbsp;
                  <button className="btn waves-effect grey lighten-2 black-text" onClick={this.clear}>Zerar</button>
                  &nbsp;&nbsp;
                  <button className="btn waves-effect teal" onClick={this.counterIncrement}>+1</button>                       
                </div>     
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default App;
