import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import SegmentedControlIOS from './components/SegmentedControlIOS'


const theme = {
  main: '#FF3B30'
}

class App extends Component {
  state = {
    index: 0
  }
  render() {
    const values = ['My Library', 'My Collection', 'My Store']
    return (
      <ThemeProvider theme={theme}>
        <SegmentedControlIOS
          values={values}
          selectedIndex={this.state.index}
          onValueChange={(value) => this.setState({index: values.indexOf(value)})}
        />
      </ThemeProvider>
    );
  }
}

export default App;
