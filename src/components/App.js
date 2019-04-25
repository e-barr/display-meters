import React, { Component } from 'react';
import DisplayMeter from './DisplayMeter'

class App extends Component {
  state = {
    selectedMeterId: null
  }

  changeSelectedMeterId = (id) => {
    this.setState({
      selectedMeterId: id
    })
  }

  render() {
    return (
      <div className="App">
        <DisplayMeter
          changeSelectedMeterId={this.changeSelectedMeterId}
        />
      </div>
    );
  }
}

export default App;
