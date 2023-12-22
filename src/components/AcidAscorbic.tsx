import { useMemo } from 'react'
import { Pie } from "react-chartjs-2";

import {default as ascorbic} from '../data/Acid_Ascorbic.json'


export const AcidAscorbic = () => {

  console.log('ascorbic: ', ascorbic)

  const memoizedData = useMemo(() => {
    const answerData : Record<string, number> = {'Positive': 0, 'Negative': 0}
    for (const item of ascorbic) {
      if (item.answer === 'Positive') {
        answerData['Positive'] += 1
      } else if(item.answer === 'Negative') {
        answerData['Negative'] += 1
      }
    }
    return answerData
  }, [])

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>جواب آزمایش Acid_Ascorbic</h2>
      <div style={{width: '400px', height: '400px'}}>
        <Pie
          data={{
            labels: Object.keys(memoizedData), 
            datasets: [
              {
                label: "Acid Ascorbic ",
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
                text: "جواب آزمایش Acid_Ascorbic"
              }
            }
          }}
        />
      </div>
    </div>
  )
}
