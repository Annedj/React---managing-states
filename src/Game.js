import React, { Component }  from 'react';

class Game extends Component {
  constructor(props) {
  	super(props)
    const numbers = this.randomNumbers()
	this.state = {
      value1: numbers.value1,
      value2: numbers.value2,
      value3: numbers.value3,
      proposedAnswer: numbers["proposedAnswer"]
    }
  }
//  proposedAnswer = () => Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3

  randomNumbers = () => { 
    const numbers = {
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100)
    }
  	numbers["proposedAnswer"] = Math.floor(Math.random() * 3) + Object.values(numbers).reduce((a,b) => a + b)
	return numbers
  }

  checkAnswer = (event) => {
  	let mathsAnswer = (this.state.value1 + this.state.value2 + this.state.value3 === this.proposedAnswer)
    this.props.onCheckScore((mathsAnswer && event.target.name === 'true') || (!mathsAnswer && event.target.name === 'false'))
	const numbers = this.randomNumbers()
    this.setState((currentState) => (
      {
        value1: numbers.value1,
        value2: numbers.value2,
        value3: numbers.value3,
        proposedAnswer: numbers["proposedAnswer"]
      }
    ))
  } 

  render() {
  	return (
      <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={(e) => this.checkAnswer(e)} name='true' >True</button>
          <button onClick={(e) => this.checkAnswer(e)} name='false' >False</button>
        </div>
  )}
}

export default Game