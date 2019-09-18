import React, { useState } from 'react'

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles';

import Button from '../../components/Button'

import './style.css'



 function QuizPage (props) {

    const [trusteesValue, setTrusteesValue] = useState('female');
    const [charityValue, setCharityValue] = useState('female');


    const  handleTrusteesChange = (event) => {
        setTrusteesValue(event.target.value);
    }

    const  handleCharityChange = (event) => {
        setCharityValue(event.target.value);
      }

    return (<div className='page'>
        <p>1. What is you annual turnover?</p>
        <input type='text' className='page-annualTurnover' />
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

        <Button className='page-submit'>submit</Button>
    </div>)
}

export default QuizPage