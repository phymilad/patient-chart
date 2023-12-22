

import {default as alp} from '../data/ALP.json'


export const Alp = () => {

  console.log('alp: ', alp)

  // const memoizedData = useMemo(() => {
  //   const answerData : Record<'Positive' | 'Negative', number> = {'Positive': 0, 'Negative': 0}
  //   for (const item of ascorbic) {
  //     if (item.answer === 'Positive') {
  //       answerData['Positive'] += 1
  //     } else if(item.answer === 'Negative') {
  //       answerData['Negative'] += 1
  //     }
  //   }
  //   return answerData
  // }, [])

  // console.log(memoizedData)

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{width: '400px', height: '400px'}}>
        {/* <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "جواب آزمایش Acid_Ascorbic"
              }
            }
          }}
        /> */}
      </div>
    </div>
  )
}
