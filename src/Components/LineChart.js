import React, { useState } from 'react'
import Chart from "react-apexcharts";

const LineChart = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      })
  return (
    <div>
      <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="600"
            />
    </div>
  )
}

export default LineChart
