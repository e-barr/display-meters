import React, { Component } from 'react'


class DisplayMeter extends Component {
    renderMeters (metersInfo) {
        let renderedMeters = []

        for (let meterId in metersInfo) {
            let oneMeter = (
                <div
                    onClick={() => {this.props.changeSelectedMeterIdAndInfo(meterId)}}
                    key={meterId}
                >
                    {meterId}
                </div>
            )
            renderedMeters.push(oneMeter)
        }
        return renderedMeters;
    }

    render() {
        return (
            <div>
                {this.renderMeters(this.props.disagg)}
            </div>
        )
    }
}

export default DisplayMeter;