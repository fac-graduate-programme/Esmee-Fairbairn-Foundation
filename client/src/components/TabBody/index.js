import React from 'react';

import Textarea from '../Textarea'
import './style.css'

export default function TabBody(props) {

  const { question, onChangeAnswer } = props;
  const { tips, expectations, title, wordsLimit } = question;

  return (
    <div className='tabBody'>
      <h1 className='tabBody-question'>{title}</h1>
      <ul>
        {tips.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h2>We do not fund:</h2>
      <ul>
        {expectations.map((item, index) => <li key={index} className='tabBody-expectationsItem'>{item}</li>)}
      </ul>
      <Textarea onChange={onChangeAnswer} wordsLimit={wordsLimit} />
    </div>
  )
}
