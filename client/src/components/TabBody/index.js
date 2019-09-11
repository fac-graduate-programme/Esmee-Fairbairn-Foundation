import React from 'react';

import Textarea from '../Textarea'
import './style.css'

export default function TabBody(props) {

  const { question, tips, expectations, onChange, wordsLimit } = props;

  return (
    <div className='tabBody'>
      <div className='tabBody-guidelines'>
        <h2>Refer to
          <a className='tabBody-guidelines-href' href='https://esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf'>
            application guidelines
          </a>
        </h2>
      </div>
      <h1 className='tabBody-question'>{question}</h1>
      <ul>
        {tips.map(item => <li>{item}</li>)}
      </ul>
      <h2>We do not fund:</h2>
      <ul>
        {expectations.map(item => <li className='tabBody-expectationsItem'>{item}</li>)}
      </ul>
      <Textarea onChange={onChange} wordsLimit={wordsLimit}/>
    </div>
  )
}
