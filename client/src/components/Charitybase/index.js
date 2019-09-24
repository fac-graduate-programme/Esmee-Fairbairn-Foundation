import React, {useState} from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '../Button'

export default (props) =>{

    const [charityBase, setCharityBase] = useState("")
    const [charityName, setCharityName] = useState("")
    const [validateByAPI, setValidatedByAPI] = useState(false)
    const [loading, setLoading] = useState(false);

    const setSateCharityBase = string => {
    setCharityBase(string)
    }

    const requiredSchema = yup.object().shape({
      charityBase: yup.string().matches(/true/), 
     charityName: yup.string().required()
    })



    const handleValidation = async () => { 
    const valid= await requiredSchema.isValid({
        charityBase, charityName
      })

      if(!valid) {
        Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Please re enter your organisation's name. Note we can only validate charites registered in England or Wales."
      })} else {
        setLoading(true)
        axios({
          method: 'POST',
          url: '/api/v1/charitybase',
          headers: { 'content-type': 'application/json' },
          data: {
           charityName: charityName
          }
        })
          .then(({ data, error }) => {
            setLoading(false)
            if (error) {
              Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: "Something went wrong. Please resubmit your organisation's name."
              })
            } else{
            //success
            }
           
          })
      }
      
      
      
      }
       
    
    
      return  (
        <>
         <p> 1. Are you registered as a charity with the charity commission in England or Wales? </p>  
   <RadioGroup aria-label="radio buttons for" name="trustees" value={charityBase} onChange={(event)=>{setSateCharityBase(event.target.value)}}>
          <FormControlLabel value='true' control={<Radio />} label="Yes" />
          <FormControlLabel value='false' control={<Radio />} label="No" />
        </RadioGroup>
        <p>1. What is your Charity's Name?</p>
        <input type='text' className='page-annualTurnover' placeholder='Enter a value' onChange={e => setCharityName(e.target.value)} />
        <p>If you answered yes to the first question you can validate your answers to the following questions </p>
        <Button className='page-submit' onClick={handleValidation}>validate</Button>
        </>
      )
    }
    
  