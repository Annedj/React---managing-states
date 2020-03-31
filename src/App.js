import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Score from './Score';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    }
  }
  
  checkScore = (check) => {
    console.log(check)
    let addedScore = (check) ? 1 : 0
    this.setState((currentState) => (
      {
        numQuestions: currentState.numQuestions + 1,
        numCorrect: currentState.numCorrect + addedScore
      }
    ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Game onCheckScore={this.checkScore} />
		<Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
      </div>
    );
  }
}

export default App;
