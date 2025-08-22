import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  }

  const goBack = () => {
    navigate(-1)
  }


  return (
    <div>
      <h3>about</h3>
      <button type="button" onClick={gotoHome}>Home</button>
       <button type="button" onClick={goBack}>Back</button>                 {/*  this will get back to you to the page from where u left */}
    </div>
  )
}

export default About
