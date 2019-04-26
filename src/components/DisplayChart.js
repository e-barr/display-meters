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

        return { BaseLoadData: processedBaseLoadData, TSLData: processedTSLData, WSLData: processedWSLData }
    }

    getProcessedDataPoints = (dataPoints) => {
        let processedDataPoints = []

        dataPoints.forEach(dataPoint => {
            let strDate = dataPoint.Date
            let digits = strDate.split("-").map(n => parseInt(n))
            let xCoor = Date.UTC(digits[0], digits[1] - 1, digits[2])
            let yCoor = dataPoint[1]
            processedDataPoints.push([xCoor, yCoor])
        })

        return processedDataPoints
    }
   
    render() {
        const allProcessedDataPoints = this.getAllProcessedDataPoints()
        const { BaseLoadData, TSLData, WSLData } = allProcessedDataPoints
        const chartTitle = `Meter ${this.props.selectedMeterId} for 2018`

            return (
              <div>
                <AbstractChart config={{
                  chart: {
                    type: 'spline',
                    zoomType: 'x'
                  },
                  title: {
                      text: chartTitle
                  },
                  xAxis: {
                      title: {
                          text: 'Date'
                      },
                      type: 'datetime',
                      dateTimeLabelFormats: {
                          day: '%b %e'
                      }
                  },
                  plotOptions: {
                    series: {
                        allowPointSelect: true
                    }
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
    }
}

export default DisplayChart;