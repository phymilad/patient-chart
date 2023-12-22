import { useMemo } from 'react'

import {default as alp} from '../../data/ALP.json'
import { makeRangeData } from '../../utils/functions'
import { Pie } from 'react-chartjs-2'


export const Alp = () => {

  // console.log('alp: ', alp)

  makeRangeData({data: alp, low: 40, high: 130})

  const memoizedData = useMemo(() => {
    return makeRangeData({data: alp, low: 40, high: 130})
  }, [])

  console.log(memoizedData)

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{width: '400px', height: '400px'}}>
        <Pie
          data={{
            labels: Object.keys(memoizedData), 
            datasets: [
              {
                label: "ALP",
                data: Object.values(memoizedData),
                backgroundColor: [
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                  "red",
                ],
                borderColor: "white",
                borderWidth: 1
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "جواب آزمایش ALP"
              }
            }
          }}
        />
      </div>
    </div>
  )
}
