import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactGA from 'react-ga'

import WelcomePage from './pages/Welcome'
import NotePage from './pages/Note'
import TipsPage from './pages/Tips'
import QuestionsPage from './pages/Questions'
import QuizPage from './pages/QuizPage'
import logo from './assets/title-logo.svg'
import initializeAnalytics from '../../client/src/components/Tracking';

import './style.css'


const  App = () => {

  initializeAnalytics();

  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
  axios('/api/v1/questions')
    .then(res => setQuestions(res.data.data))
    .catch(err => setError(err))
  }, [])


  const handleStaticButton = () => {
    ReactGA.event({
      category: 'Navigation',
      action: `Page Number ${pageNumber}`,
      label: 'Button Clicked'
    });
    setPageNumber(pageNumber+1)
  }



  return (
    <div className="app">
      <img src={logo} className='app-logo' alt='default-logo' />

      {pageNumber !== 1 && pageNumber !==2 ? (
        <h4 className='app-subTitle' >Refer to <a rel='noopener noreferrer' href='https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf' target='_blank' className='app-subTitle--link'> application guidelines</a></h4>
      ) : (
        null
      )}
      
    
     {(function(pageNumber) {  
      switch(pageNumber) {
        case 1:
          return <WelcomePage handleStaticButton = {handleStaticButton}  />
        case 2:
          return <NotePage handleStaticButton = {handleStaticButton}  />
        case 3:
          return <TipsPage handleStaticButton = {handleStaticButton}  />
        case 4:
          return <QuizPage handleStaticButton={handleStaticButton} />
        case 5:
        {
          if (error) {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong, try again!',
            }) 
          } else return <QuestionsPage questions={questions}/>
        }
      }
    })(pageNumber)}
  </div>
  )
}

export default App;
