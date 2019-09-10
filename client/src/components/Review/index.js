import React from 'react'

import './style.css'

export default function Review(props) {

  const { href, answer1, answer2, answer3 } = props;

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
        <h1 className='review-question'>What is the change you are aiming to achieve?</h1>
        <p className='review-answer'>{answer1}</p>
      </div>

      <div>
        <h1 className='review-question'>What work will you deliver with the grant?</h1>
        <p className='review-answer'>{answer2}</p>
      </div>

      <div>
        <h1 className='review-question'>A brief description of your organisation?</h1>
        <p className='review-answer'>{answer3}</p>
      </div>
    </div>
  );
}
