import React from 'react'

import './style.css'

export default function Review(props) {

  const { question1, question2, question3, href, answer1, answer2, answer3 } = props;

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
        <h1 className='review-question'>{question1}</h1>
        <p className='review-answer'>{answer1}</p>
      </div>

      <div>
        <h1 className='review-question'>{question2}</h1>
        <p className='review-answer'>{answer2}</p>
      </div>

      <div>
        <h1 className='review-question'>{question3}</h1>
        <p className='review-answer'>{answer3}</p>
      </div>
    </div>
  );
}
