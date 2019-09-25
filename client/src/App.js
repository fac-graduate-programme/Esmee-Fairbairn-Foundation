import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import WelcomePage from './pages/Welcome'
import NotePage from './pages/Note'
import TipsPage from './pages/Tips'
import QuestionsPage from './pages/Questions'
import QuizPage from './pages/QuizPage'
import logo from './assets/title-logo.svg'

import ReactGA, { ga } from 'react-ga';

import './style.css'

const initializeAnalytics = () => {
  ReactGA.initialize('UA-148722706-1');
}

const  App = () => {

  initializeAnalytics();

  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState();
  const [showApp, setShowApp] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);
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

  const handleQuizResult = (isValid) => {
    
    if(isValid) {
      Swal.fire({
        type: 'success',
        title: 'Nice',
        text: 'Thank you for submitting the Quiz. Please fill the application to get the fund',
      }) 
       setShowApp(true)
       setShowQuiz(false)
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Sorry, you did not match our criteria to get the fund!',
      }) 
    }
  }

  return (
    <div className="app">
      <img src={logo} className='app-logo' />

      {pageNumber !== 1 && pageNumber !==2 ? (
        <h4 className='app-subTitle' >Refer to <a href='https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf' target='_blank' className='app-subTitle--link'> application guidelines</a></h4>
      ) : (
        null
      )}
      
     {showQuiz == true ? <QuizPage result={handleQuizResult} /> : null}
     {showApp  == true ? <div>
      {pageNumber === 1 ? <WelcomePage handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 2 ? <NotePage handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 3 ? <TipsPage handleStaticButton = {handleStaticButton}  /> : null}
      {pageNumber === 4 ? error ?  Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong, try again!',
        }) 
        : <QuestionsPage questions={questions}/> : null}
      </div> : null}
  </div>
  )
}

export default App;
