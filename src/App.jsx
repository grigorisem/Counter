import { useState } from 'react'
import './App.css'
import btcImg from './assets/btc.png';
import {Count} from './components/Count';
function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(prev => prev + 1);
  }
  return ( 
    <>
        <div className="content">
          <div className="count">
            <img src={btcImg} alt="btc"/>
            <h1>BTC {count}</h1>
          </div>
        </div>
        <Count addCount = {addCount}/>
    </>
  )
}

export default App
