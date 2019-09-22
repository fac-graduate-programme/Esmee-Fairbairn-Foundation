import React from 'react'

import './style.css'

export default function Review(props) {

  const { questions, href, answers } = props;

  return (
    <div className='review'>
      <div>
        {
          questions.map((question, index) => <div key={question.id}>
              <h1 className='review-question'>{question.title}</h1>
              <p className='review-answer'>{answers[index]}</p>
            </div>
          )
        }
      </div>

    </div>
  )
}
