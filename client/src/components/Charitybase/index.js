import React, {useState, useEffect} from 'react';

import axios from 'axios'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import Button from '../Button'
import List from './list'


export default (props) =>{

    const [regestered, setRegestered] = useState("")
    const [charityName, setCharityName] = useState("")
    const [auth, setAuth] = useState("")
    const [charityBaseResult, setcharityBaseResult] = useState(false)
    
    // needs to be moved to where this is called and then passed as a prop
    const [validateByAPI, setValidatedByAPI] = useState(false)
    const [selectedCharity, setSelectedCharity] = useState(null)

    const [loading, setLoading] = useState(null);
    const [error,setError] = useState(false)

    useEffect(() => {
      axios('/api/v1/charitybase')
      .then(res => setAuth(res.data.data))
      .catch(err => setError(err))
    }, [])

    const regesteredWithAPI = string => {
    setRegestered(string)
    }

    const requiredSchema = yup.object().shape({
      regestered: yup.string().matches(/true/), 
     charityName: yup.string().required()
    })


  const client = new ApolloClient({
    uri: 'https://charitybase.uk/api/graphql',
    headers: {
      Authorization: `Apikey ${auth}`
    }
  })


    const handleValidation = async (name) => { 
      console.log(auth)
    const valid= await requiredSchema.isValid({ regestered, charityName })
      if(!valid) {
        Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Please re enter your organisation's name. We can only validate charites registered in England or Wales."
      })} else {
        setLoading(true)
        client
        .query({
          query: gql`{
            CHC {
            
                getCharities(filters:{
                    search: "${charityName}"
                }) {
                    count
                    list(limit: 5){
                        id
                        names {
                            value
                        }
                        finances {income}
                        trustees {name}
                    }
                }
            }
            }`
      
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
              console.log(data.CHC.getCharities.list)
              setcharityBaseResult(data.CHC.getCharities.list)
            
            }
           
          })
      }
      
      
      
      }
       
    
    
      return  (
        <>
         <p> 1. Are you registered as a charity with the charity commission in England or Wales? </p>  
   <RadioGroup aria-label="radio buttons for" name="trustees" value={regestered} onChange={(event)=>{regesteredWithAPI(event.target.value)}}>
          <FormControlLabel value='true' control={<Radio />} label="Yes" />
          <FormControlLabel value='false' control={<Radio />} label="No" />
        </RadioGroup>
        <p>1. What is your Charity's Name?</p>
        <input type='text' className='page-annualTurnover' placeholder='Enter a value' onChange={e => setCharityName(e.target.value)} />
        <p>If you answered yes to the first question you can validate your answers to the following questions </p>
        <Button className='page-submit' onClick={handleValidation}>validate</Button>
        { !loading && charityBaseResult ? <List charities={charityBaseResult} setValidatedByAPI={setValidatedByAPI} setSelectedCharity={setSelectedCharity} loading={loading}/> : null}
        </>
      )
    }
    
  