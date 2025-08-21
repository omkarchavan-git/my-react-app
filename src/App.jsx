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
import Dynamic_Routing from './pages/Dynamic_Routing'
import Course_details from './pages/Course_details'

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
              <Route path='/courses' element = {<Dynamic_Routing />}  /> 
              <Route path='/courses/:id' element = {<Course_details />}  /> 
              
            </Routes>
          </Router>

      </div>
    </>
  )
}

export default App
