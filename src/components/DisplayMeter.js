import React, { Component } from 'react'


class DisplayMeter extends Component {
    renderMeters (metersInfo) {
        let renderedMeters = []
        const styleConfig = { padding: '5px', display: 'inline-block', border: 'none', borderRadius: '2px', margin: '5px', backgroundColor: 'white', textAlign: 'center', textDecoration: 'none' }

        for (let meterId in metersInfo) {
            let oneMeter = (
                <div
                    onClick={() => {this.props.changeSelectedMeterIdAndInfo(meterId)}}
                    key={meterId}
                    style={styleConfig}
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
                <div style={{ backgroundColor: '#CCC', borderRadius: '2px', padding: '10px' }}>
                    {renderedMeters}
                </div>
            </div>
        )
    }
}

export default DisplayMeter;