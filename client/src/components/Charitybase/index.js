import React, {useState} from 'react';

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

export default (props) =>{

    const [charityBase, setCharityBase] = useState(false)

    const fetch =(name) => {    axios({
        method: 'POST',
        url: '/api/v1/charitybase',
        headers: { 'content-type': 'application/json' },
        data: {
         charityName: name
        }
      })
        .then(({ data, error }) => {
          setLoading(false)
          if (error) {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong. Please resubmit your organisations name.'
            })
          } else{
          //success
          }
         
        })}
       
    
    
    
    
    
      return  (
        <>
         <p> 1. Are you registered as a charity with the charity commission in England or Wales? </p>  
   <RadioGroup aria-label="radio buttons for" name="trustees" value={charityBase} onChange={(event)=>{setCharityBase(event.target.value)}}>
          <FormControlLabel value='true' control={<Radio />} label="Yes" />
          <FormControlLabel value='false' control={<Radio />} label="No" />
        </RadioGroup>
        <p>1. What is your Charity's Name?</p>
        <input type='text' className='page-annualTurnover' placeholder='Enter a value' onChange={fetch} />
        </>
      )
    }
    
  