import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Events from './components/Events'
import Loops  from './components/Loops'
import UseEffects from './components/UseEffects'

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
         {/* <Loops /> */}
        <UseEffects />
      </div>
    </>
  )
}

export default App
