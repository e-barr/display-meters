import React, { Component } from 'react';
import DisplayMeter from './DisplayMeter';
import DisplayChart from './DisplayChart';
import disagg from '../Disagg';

class App extends Component {
  state = {
    selectedMeterId: null,
    selectedMeterInfo: null
  }

  changeSelectedMeterIdAndInfo = (selectedMeterId) => {
    const selectedMeterInfo = disagg[selectedMeterId]
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
        {this.state.selectedMeterInfo ? <DisplayChart /> : null }
      </div>
    );
  }
}

export default App;
