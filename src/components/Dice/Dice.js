import React from "react";
import "./dice.css";

class Dice extends React.Component {
  state = {
    dice1: 0,
    dice2: 0,
  };
  /*get number between 1-6*/
  getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1  
  }

  /* change the valueof two dice to the random numbers got and passes 
  the sum of them to another function*/
  componentDidMount() {
    const num1 = this.getRandomNumber();
    const num2 = this.getRandomNumber();
    this.setState({ dice1: num1, dice2: num2 });
    setTimeout(() => this.props.onRender(num1+num2), 550);
  }
  
/* same random value on two dices*/
  render() {
    return (
      <div>
        <div className={`dice dice${this.state.dice1}`}>
        </div>
        <div className={`dice dice${this.state.dice2}`}>
        </div>
      </div>
    );
  }
}

export default Dice;