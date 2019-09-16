

import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Page1 from './pages/Welcome'
import Page2 from './pages/Note'
import Page3 from './pages/Tips'
import Page4 from './pages/Questions'
import logo from './assets/title-logo.svg'

import './style.css'

const  App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [questions, setQuestions] = useState([]);

  const handleStaticButton = () => {
    setPageNumber(pageNumber+1)
  }

  return (
    <div className="app">
      <img src={logo} className='app-logo' />

      {pageNumber !== 1 && pageNumber !==2 ? (
        <h4 className='app-subTitle' >Refer to <a href='https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf' target='_blank' className='app-subTitle--link'> application guidelines</a></h4>
      ) : (
        null
      )}
      
      {pageNumber === 1 ? <Page1 handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 2 ? <Page2 handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 3 ? <Page3 handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 4 ? <Page4 /> : null}
      
  </div>
  )
}

export default App;