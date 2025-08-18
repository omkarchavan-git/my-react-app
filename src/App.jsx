import { useState } from 'react'
import './App.css'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">

        <div className='mess'>

          <h2>Root</h2>


        </div>
        <Events />
      </div>
    </>
  )
}

export default App
