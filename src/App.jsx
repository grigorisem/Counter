import { useState } from 'react'
import './App.css'
import btcImg from './assets/btc.png';
import {Count} from './components/Count';
function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(1);

  function addCount() {
    setCount(prev => prev + click);
  };
  function withdrawCount() {
    setCount(prev => prev * 0);
  };
  function changeClick() {
    if (count >=20) {
      setCount(prev => prev - 20);
      setClick(prev => prev * 2 );
    }
  }

  return ( 
    <>
        <div className="content">
          <div className="count">
            <img src={btcImg} alt="btc"/>
            <h1>BTC {count}</h1>
          </div>
        </div>
        <Count doSomething = {addCount} buttonName={'Mine'}/>
        <Count doSomething = {withdrawCount} buttonName={'Withdraw'}/>
        <Count doSomething = {changeClick} buttonName={'Buy Upgrade'}/>
    </>
  )
}

export default App
