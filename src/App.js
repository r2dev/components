import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import SegmentedControlIOS from './components/SegmentedControlIOS'


const theme = {
  main: '#FF3B30',
}

class App extends Component {
  state = {
    index: 0
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SegmentedControlIOS
          values={['My Library', 'My Collection', 'My Store']}
          selectedIndex={this.state.index}
        />
      </ThemeProvider>
    );
  }
}

export default App;
