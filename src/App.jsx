import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Events from './components/Events'
import Loops  from './components/Loops'
import UseEffects from './components/UseEffects'
import FormHandel from './components/FormHandel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">

        <div className='mess'>

          <h2>Root</h2>


        </div>
        {/* <Events />
        <Counter />
          <Loops />  
        <UseEffects /> */}

        <FormHandel />
      </div>
    </>
  )
}

export default App
