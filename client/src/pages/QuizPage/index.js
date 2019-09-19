import React, { useState } from 'react'
import Swal from 'sweetalert2'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import Button from '../../components/Button'

import './style.css'

 function QuizPage (props) {

    const [trusteesValue, setTrusteesValue] = useState()
    const [charityValue, setCharityValue] = useState()
    const [annualTurnover, setAnnualTurnover] = useState()

    const  handleTrusteesChange = (event) => {
      setTrusteesValue(event.target.value);
    }

    const  handleCharityChange = (event) => {
      setCharityValue(event.target.value);
    }

    const handleAnnualTurnover = (event) => {
      setAnnualTurnover(event.target.value)
    }

    const handleSubmit = () => {
      if(!trusteesValue || !charityValue || !annualTurnover) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Please fill the three questions!'
        })
      }
      else {
        if(isNaN(annualTurnover)) {
          Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Annual Turnover should be a number!'
        })} else {
          if(trusteesValue === 'trusteesNo') {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'We don\'t fund organisations with fewer than three non-executive trustees or directors.'
            })
          } 
          if(charityValue === 'charityNo') {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'We don\'t fund charity!'
            })
          }
        }
      }
    }

    return (<div className='page'>
        <p>1. What is you annual turnover?</p>
        <input type='text' className='page-annualTurnover' placeholder='Enter a value' onChange={handleAnnualTurnover} />
        <p>2. Do you have a minimum of 3 trustees?</p>   
        <RadioGroup aria-label="trustees" name="trustees" value={trusteesValue} onChange={handleTrusteesChange}>
          <FormControlLabel value="trusteesYes" control={<Radio />} label="Yes" />
          <FormControlLabel value="trusteesNo" control={<Radio />} label="No" />
        </RadioGroup>
        <p>3. Are you a charity</p>
        <RadioGroup aria-label="charity" name="charity" value={charityValue} onChange={handleCharityChange}>
          <FormControlLabel value="charityYes" control={<Radio />} label="Yes" />
          <FormControlLabel value="charityNo" control={<Radio />} label="No" />
        </RadioGroup>
        <Button className='page-submit' onClick={handleSubmit}>submit</Button>
    </div>)
}

export default QuizPage