import React, { Component } from 'react'
import disagg from '../Disagg'


class DisplayMeter extends Component {
    renderMeters (metersInfo) {
        let renderedMeters = []

        for (let meterId in metersInfo) {
            let oneMeter = (
                <div
                    onClick={() => this.props.changeSelectedMeterId(meterId)}
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
                {this.renderMeters(disagg)}
            </div>
        )
    }
}

export default DisplayMeter;