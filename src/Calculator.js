import React from 'react';

function calculateBMI(height, weight) {
  let squareMeters = Math.pow(height, 2)

  return (weight / (squareMeters / 100) * 100).toFixed(1)
}
function reportBMI(height, weight) {
  let bmi = calculateBMI(height, weight)

  if (bmi < 18.5) {
    return `${bmi} Underweight`
  } else if(bmi >= 18.5 && bmi <= 24.9) {
    return `${bmi} Normal weight`
  } else if(bmi >= 25 && bmi <= 29.9) {
    return `${bmi} Overweight`
  } else if(bmi >= 30) {
    return `${bmi} Obesity`
  }
}
function Range({label, min, max, value, onChange}) {

  return <div className="slide-container">
    <label htmlFor="bmi-slider" className="slider-title">
      {label}
    </label>
    <span className="min-num">
      {min}
    </span>
    <input type="range" id="bmi-slider"
           className="slider"
           min={min} max={max} step="1"
           onChange={onChange} value={value} />
    <span className="max-num">
      {max}
    </span>
  </div>
}

class Calculator extends React.Component {
  state = {
    weight: 35,
    height: 90,
  }

  handleWeightChange(e) {
    this.setState({ weight: e.target.value});
  }

  handleHeightChange(e) {
    this.setState({ height: e.target.value});
  }

  render() {
    let {height, weight} = this.state
    let bmi = reportBMI(height, weight)

    return (
      <div className="calculator-container">
        <h2 className="title">BMI calculator</h2>

        <Range
          value={height}
          min="90" max="245"
          label="Height"
          onChange={(e) => this.handleHeightChange(e)}
        />

        <div className="height">
          {height} cm
        </div>

        <Range
          value={weight}
          min="35" max="200"
          label="Weight"
          onChange={(e) => this.handleWeightChange(e)}
        />

        <div className="weight">
          {weight} kg
        </div>

        <div className="result">
          <span>BMI</span>
          {bmi}
        </div>
      </div>
    )
  }
}

export default Calculator;
