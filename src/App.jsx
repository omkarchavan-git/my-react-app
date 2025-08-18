import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">

        <div className='mess'>

          <h2>Root</h2>


        </div>
        <Events />
        <Counter />
      </div>
    </>
  )
}

export default App
