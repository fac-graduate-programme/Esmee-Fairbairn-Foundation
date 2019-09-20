import React from 'react'

import './style.css'

export default function Review(props) {

  const { questions, href, answers } = props;

  return (
    <div className='review'>
      <div className='review-guidelines'>
        <h2>Refer to
          <strong>
            <a href={href} className='review-guidelines-href'>
              application guidelines
            </a>
          </strong>
        </h2>
      </div>

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
