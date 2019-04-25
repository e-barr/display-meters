import React, { Component } from 'react'

class DisplayChart extends Component {
    processInfo = (arrayOfInfo) => {
        let obj = {}

        arrayOfInfo.forEach(infoPoint => {
            let type = infoPoint.Type
            if (obj[type]) {
                obj[type].push(infoPoint)
            } else {
                obj[type] = [infoPoint]
            }
        })

        return obj;
    }
    render() {
        const processedInfo = this.processInfo(this.props.selectedMeterInfo)
        const info = processedInfo
        debugger;
        console.log(info)
        return (
            <div>DisplayChart</div>
        )
    }
}

export default DisplayChart;