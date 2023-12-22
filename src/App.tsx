import './index.css'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {default as alpData} from './data/ALP.json' 
import { AppRoutes } from './AppRoutes'

Chart.register(CategoryScale)

function App() {

  console.log(alpData)

  return (
    <div className="container">
      <div className='main'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
