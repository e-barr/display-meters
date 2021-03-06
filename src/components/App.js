import React, { Component } from 'react'
import DisplayMeter from './DisplayMeter'
import DisplayChart from './DisplayChart'
import disagg from '../Disagg'

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
    const displayChart = this.state.selectedMeterInfo ? <DisplayChart
      selectedMeterInfo={this.state.selectedMeterInfo}
      selectedMeterId={this.state.selectedMeterId}
    /> : null
    return (
      <div className="App">
          <div>
            <DisplayMeter
              changeSelectedMeterIdAndInfo={this.changeSelectedMeterIdAndInfo}
              disagg={disagg}
              />
            {displayChart}
          </div>
      </div>
    );
  }
}

export default App;
