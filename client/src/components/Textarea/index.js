import React from 'react';

import './style.css'

export default function Textarea(props) {

  const { wordsLimit, onChange } = props;
  
  return (
    <div className='textarea'>
      <p className='textarea-limitation'>Use up to {wordsLimit} words...</p>
      <textarea className='textarea-answer' placeholder='Type here...' onChange={onChange} />
    </div>
  )
}
