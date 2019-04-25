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
        const renderedMeters = this.renderMeters(this.props.disagg)
        return (
            <div>
                {renderedMeters}
            </div>
        )
    }
}

export default DisplayMeter;