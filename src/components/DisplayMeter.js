import React, { Component } from 'react'


class DisplayMeter extends Component {
    renderMeters (metersInfo) {
        let renderedMeters = []

        for (let meterId in metersInfo) {
            let oneMeter = (
                <div
                    onClick={() => {this.props.changeSelectedMeterIdAndInfo(meterId)}}
                    key={meterId}
                    className="four wide column"
                >
                    {meterId}
                </div>
            )
            renderedMeters.push(oneMeter)
        }
        return renderedMeters;
    }

    render() {
        const renderedMeters = this.renderMeters(this.props.disagg)
        return (
            <div style={{ padding: '5%' }}>
                <h1>Meters</h1>
                <p>Select a meter to view the graph.</p>
                <div className="ui grid">
                    {renderedMeters}
                </div>
            </div>
        )
    }
}

export default DisplayMeter;