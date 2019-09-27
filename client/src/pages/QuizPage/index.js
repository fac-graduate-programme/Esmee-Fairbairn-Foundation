import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import ReactGA from 'react-ga'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import * as yup from 'yup'
import Button from '../../components/Button'
import CharitybaseComponent from '../../components/Charitybase'

import './style.css'

 function QuizPage (props) {
    const { handleStaticButton } = props;
    const [trusteesValue, setTrusteesValue] = useState('')
    const [charityValue, setCharityValue] = useState('')
    const [annualTurnover, setAnnualTurnover] = useState('')

    const [selectedCharity, setSelectedCharity] = useState(false)
    useEffect(() => {
     
      if(selectedCharity){
        const trustees = selectedCharity["trustees"];
        setAnnualTurnover(selectedCharity.finances[0].income)
     setCharityValue("charityYes")
     if ([...trustees].length >= 3 ) setTrusteesValue("trusteesYes")
     else{setTrusteesValue("trusteesNo")}} 
   
    }, [selectedCharity])

    const schema = yup.object().shape({
      trusteesValue: yup.string().required(),
      charityValue: yup.string().required(),
      annualTurnover: yup.number().required(),
    })
    const requiredSchema = yup.object().shape({
      trusteesValue: yup.string().matches(/Yes/),
      charityValue: yup.string().matches(/Yes/),
      annualTurnover: yup.number().min(50000),
    })

    const  handleTrusteesChange = (event) => {
      ReactGA.event({
        category: 'Quiz',
        action: `Minimum of 3 trustees: ${event.target.value}`,
        label: 'Answered'
      });
      setTrusteesValue(event.target.value);
    }

    const  handleCharityChange = (event) => {
      ReactGA.event({
        category: 'Quiz',
        action: `Charity: ${event.target.value}`,
        label: 'Answered'
      });
      setCharityValue(event.target.value);
    }

    const handleAnnualTurnover = (event) => {
      ReactGA.event({
        category: 'Quiz',
        action: `Annual Turnover: ${event.target.value}`,
        label: 'Answered'
      });
      setAnnualTurnover(event.target.value)
    }

    const handleSubmit = () => {
      ReactGA.event({
        category: 'Navigation',
        action: 'Proceed',
        label: 'Quiz Completed'
      });
      schema.validate({ trusteesValue, charityValue, annualTurnover})
        .then(()=> {
            requiredSchema
            .isValid({
              trusteesValue, 
              charityValue,
              annualTurnover
            })
            .then(function(valid) {
              handleStaticButton()
            });
        })
        .catch(function(err) {
        if(err) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: err.errors
          })
        }
      })
    }

    return (<div className='page'>
        <CharitybaseComponent setSelectedCharity={setSelectedCharity}/>
        <p className='quiz_qiestions'>3. What is you annual turnover?</p>
        <input type='text' className='page-annualTurnover' placeholder='Enter a value' value={annualTurnover} onChange={handleAnnualTurnover} />
        <p className='quiz_qiestions'>4. Do you have a minimum of 3 trustees?</p>   
        <RadioGroup aria-label="trustees" name="trustees" value={trusteesValue} onChange={handleTrusteesChange}>
          <FormControlLabel value="trusteesYes" control={<Radio />} label="Yes" />
          <FormControlLabel value="trusteesNo" control={<Radio />} label="No" />
        </RadioGroup>
        <p className='quiz_qiestions'>5. Are you a charity</p>
        <RadioGroup aria-label="charity" name="charity" value={charityValue} onChange={handleCharityChange}>
          <FormControlLabel value="charityYes" control={<Radio />} label="Yes" />
          <FormControlLabel value="charityNo" control={<Radio />} label="No" />
        </RadioGroup>
        <Button className='page-submit' onClick={handleSubmit}>proceed</Button>
    </div>)
}

export default QuizPage