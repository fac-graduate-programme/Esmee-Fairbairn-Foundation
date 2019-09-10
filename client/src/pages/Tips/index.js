import React from 'react'

import Button from '../../components/Button'

import "./style.css"

export default function Page3(props) {

  const {handleStaticButton} = props

  return (
    <div className='page3'>
      <h1 className='page3-title'>Please follow these tips...</h1>
      <ul className='page3-list'>
        <li className='page3-list--item'>Please write in clear simple English - avoid jargon.</li>
        <li className='page3-list--item'>Make sure the application is fact based – with figures and evidence which support your claims.</li>
        <li className='page3-list--item'>Don’t take up lots of space explaining the general issues that lie behind your work.</li>
        <li className='page3-list--item'> Ensure that you’ve clearly explained the organisation’s track record, impact and partnerships, as well as what the organisation is going to do and why it is qualified to do it.</li>
        <li className='page3-list--item'>If possible ask someone who doesn’t know the project or your organisation to proofread the application before you submit it.</li>
      </ul>
      <Button className='page3-btn' onClick={handleStaticButton} >BEGIN</Button>
    </div>
  )
}
