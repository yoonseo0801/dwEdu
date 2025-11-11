import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartBasic1 from './component/ChartBasic1'
import BarChart1 from './component/BarChart1'

function App() {
  const [show, setShow] = useState(null);

  const btClass = (name) => 
    `px-4 py-2 rounded-lg text-white font-bold transition cursor-pointer
      ${show === name ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`;

  return (
    <>
    <div className='flex gap-3'>
      <button onClick={ () => setShow("A") } className={btClass("A")}>차트둘러보기</button>
      <button onClick={ () => setShow("B") } className={btClass("B")}>막대그래프</button>
    </div>

    <div className='mt-8'>
      { show ==="A" && <ChartBasic1/> }
      { show ==="B" && <BarChart1/> }
    </div>
    </>
  )
}

export default App
