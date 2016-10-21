import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import SegmentedControlIOS from './components/SegmentedControlIOS'
import Card from './components/Card'
import bg from '../resource/bg.jpg'
const theme = {
  main: '#FF3B30'
}

const BearBackground = styled.div`
  background-image: url(${bg});
  background-repeat: round;
  height: 300px;
`

class App extends Component {
  state = {
    index: 0,
    expended: false
  }
  render() {
    const values = ['My Library', 'My Collection', 'My Store']
    return (
      <div>
        <div>Segmented Control</div>
        <ThemeProvider theme={theme}>
          <SegmentedControlIOS
            values={values}
            selectedIndex={this.state.index}
            onValueChange={(value) => this.setState({index: values.indexOf(value)})}
          />
        </ThemeProvider>
        <div>Card</div>
        <BearBackground>
          <Card
            title={'weather'}
            expended={this.state.expended}
            handleToggle={() => this.setState({expended: !this.state.expended})}
          />
        </BearBackground>
        <div>FlexTab</div>
        
      </div>
    );
  }
}

export default App;
