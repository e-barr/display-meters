import React, { Component } from 'react'
import { AbstractChart } from 'react-highcharts-wrapper'

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

    getAllProcessedDataPoints = () => {
        const processedInfo = this.processInfo(this.props.selectedMeterInfo)
        const BaseLoadData = processedInfo.BaseLoad
        const TSLData = processedInfo.TSL
        const WSLData = processedInfo.WSL
        const processedBaseLoadData = this.getProcessedDataPoints(BaseLoadData)
        const processedTSLData = this.getProcessedDataPoints(TSLData)
        const processedWSLData = this.getProcessedDataPoints(WSLData)

        return [processedBaseLoadData, processedTSLData, processedWSLData]
    }

    getProcessedDataPoints = (dataPoints) => {
        let processedDataPoints = []

        dataPoints.forEach(dataPoint => {
            let xCoor = dataPoint.Date
            let yCoor = dataPoint[1]
            processedDataPoints.push([xCoor, yCoor])
        })

        return processedDataPoints
    }

    
    
    render() {
        const allProcessedDataPoints = this.getAllProcessedDataPoints()
        const BaseLoadData = allProcessedDataPoints[0]
        const TSLData = allProcessedDataPoints[1]
        const WSLData = allProcessedDataPoints[2]
        const chartTitle = `Meter ${this.props.selectedMeterId}`

        // debugger;
    
            return (
              <div>
                <AbstractChart config={{
                  chart: {
                    type: 'spline'
                  },
                  title: {
                      text: chartTitle
                  },
                  series: [{
                    name: 'BaseLoad',
                    data: BaseLoadData,
                  },
                  {
                      name: 'TSL',
                      data: TSLData,
                  },
                  {
                      name: 'WSL',
                      data: WSLData,
                  }
                ],
                }} />
              </div>
            )
        //   };
    }
}

export default DisplayChart;