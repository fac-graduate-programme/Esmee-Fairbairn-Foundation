import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import Page1 from './pages/Welcome'
import Page2 from './pages/Note'
import Page3 from './pages/Tips'
import Page4 from './pages/Questions'
import logo from './assets/title-logo.svg'

import './style.css'

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
  axios('/api/v1/questions')
    .then(res => setQuestions(res.data.data))
    .catch(err => setError(err))
  }, [])


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
      {pageNumber === 4 ? error ?  Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong, try again!',
        }) 
        : <Page4 questions={questions}/> : null}

  </div>
  )
}

export default App;
