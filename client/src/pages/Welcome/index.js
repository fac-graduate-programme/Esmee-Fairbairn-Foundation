import React from 'react'

import Button from '../../components/Button'

import "./style.css"

export default function Page1(props) {

  const { handleStaticButton } = props

  return (
    <div className='page1'>
      <h1 className='page1-title'>Welcome,</h1>
      <br />
      <br />
      <p className='page1-paragraph'>
      Grants Managers are not able to meet or speak to applicants before they apply because we currently receive 2,000 applications a year. 
      </p>
      <br />
      <p className='page1-paragraph'>
      We are working to reduce this number, so that we can offer more help and advice to applicants in future. This prototype is part of these efforts.
      </p>
      <Button className='page1-btn' onClick={handleStaticButton} >PROCEED</Button>
    </div>
  )
}
