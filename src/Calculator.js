import React from 'react';


function Range(props) {
  return <div className="slide-container">
    <label htmlFor="bmi-slider" className="slider-title">{props.label}</label>
    <span className="min-num">{props.min}</span>
    <input type="range" min={props.min} max={props.max} step="1" className="slider"
           onChange={props.onChange} value={props.value} id="bmi-slider" />
    <span className="max-num">{props.max}</span>
  </div>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weight: 35, height: 90};
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }
  handleWeightChange(e) {
    this.setState({ weight: e.target.value});
  }
  handleHeightChange(e) {
    this.setState({ height: e.target.value});
  }

  calculate() {
    let s = Math.pow(this.state.height, 2);
    let num = (this.state.weight / (s / 100) * 100).toFixed(1);
    if(num < 18.5) {
      return `${num} Underweight`;
    } else if(num >= 18.5 && num <= 24.9) {
      return `${num} Normal weight`;
    } else if(num >= 25 && num <= 29.9) {
      return `${num} Overweight`;
    }else if(num >= 30) {
      return `${num} Obesity`;
    }
  }

  render() {
    return (
      <div className="calculator-container">
        <h2 className="title">BMI calculator</h2>
        <Range value={this.state.height} min="90" max="245" label="Height"
               onChange = {this.handleHeightChange} />
        <div className="height">{`${this.state.height} cm`}</div>

        <Range value={this.state.weight} min="35" max="200" label="Weight"
               onChange = {this.handleWeightChange} />
        <div className="weight">{`${this.state.weight} kg`}</div>
        <div className="result"><span>BMI</span>{this.calculate()}</div>
      </div>
    )
  }
}

export default Calculator;
