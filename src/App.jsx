import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Events from './components/Events'
import Loops from './components/Loops'
import UseEffects from './components/UseEffects'
import FormHandel from './components/FormHandel'
import Multiple_input_Handeling from './components/Multiple_input_Handeling'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">

        <div className='mess'>

        </div>
        {/* <Events />
        <Counter />
          <Loops />  
        <UseEffects /> 
         <FormHandel /> 
        <Multiple_input_Handeling /> */}

          <Router>
            <Routes>
              <Route path='/' element = {<Home />}  /> 
              <Route path='/about' element = {<About />}  /> 
              
            </Routes>
          </Router>

      </div>
    </>
  )
}

export default App
