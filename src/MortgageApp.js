import React, { Component } from 'react'
import styled from 'styled-components'
const RangeInput = styled.input`
  width: 100%;
`
const Screen = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${document.documentElement.clientHeight}px;
`
const App = styled.div`
  width: 414px;
  height: 736px;
  display: flex;
  flex-direction: column;
  border: 1px solid #C2185B;
  align-items: flex-start;
`
const SliderInput = styled.div`
  width: 100%;
`
class MortgageApp extends Component {
  state = {
    homePrice: 300000,
    downPayment: 60000,
    interest: 3322,
  }
  _calculateMonthPayment = () => {
    const p = this.state.homePrice - this.state.downPayment
    const i = this.state.interest/1000/12/100
    const n = 360
    const m = p * (i * Math.pow((1 + i), n))/(Math.pow(1 + i, n) - 1)
    return m
  }

  render() {
    return (
      <Screen>
        <App>

          <SliderInput>
            <span>
              price: {this.state.homePrice}
            </span>
            <RangeInput
              step={10000}
              min={0}
              max={10000000}
              type="range"
              value={this.state.homePrice}
              onChange={(e) => this.setState({homePrice: e.target.value})}
            />
          </SliderInput>
          <SliderInput>
            <span>
              Down payment: {this.state.downPayment} ----- {this.state.downPayment / this.state.homePrice * 100}
            </span>
            <RangeInput
              min={0}
              max={40}
              type="range"
              value={this.state.downPayment/ this.state.homePrice * 100}
              onChange={(e) => this.setState({downPayment: e.target.value / 100 * this.state.homePrice})}
            />
          </SliderInput>
          <SliderInput>
            <span>
              Interest: {this.state.interest / 1000}
            </span>
            <RangeInput
              min={0}
              max={12000}
              step={150}
              type="range"
              value={this.state.interest}
              onChange={(e) => this.setState({interest: e.target.value})}
            />
          </SliderInput>
          ${this._calculateMonthPayment()}
        </App>
      </Screen>
    )
  }
}

export default MortgageApp
