import React, { Component } from 'react';
import DisplayMeter from './DisplayMeter';
import disagg from '../Disagg';

class App extends Component {
  state = {
    selectedMeterId: null,
    selectedMeterInfo: null
  }

  changeSelectedMeterIdAndInfo = (selectedMeterId) => {
    const selectedMeterInfo = disagg[parseInt(selectedMeterId)]
    this.setState({
      selectedMeterId,
      selectedMeterInfo
    })
  }

  render() {
    debugger;
    return (
      <div className="App">
        <DisplayMeter
          changeSelectedMeterIdAndInfo={this.changeSelectedMeterIdAndInfo}
          disagg={disagg}
        />
      </div>
    );
  }
}

export default App;
