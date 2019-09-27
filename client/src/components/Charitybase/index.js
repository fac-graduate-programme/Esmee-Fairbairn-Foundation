import React, {useState, useEffect} from 'react';

import axios from 'axios'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import ReactGA, { ga } from 'react-ga'

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import Button from '../Button'
import List from './list'
import initializaAnalytics from '../Tracking';

import "./style.css";

export default ({setSelectedCharity}) =>{

    const [regestered, setRegestered] = useState("")
    const [charityName, setCharityName] = useState("")
    const [auth, setAuth] = useState("")
    const [charityBaseResult, setcharityBaseResult] = useState(false)
    
   

    const [loading, setLoading] = useState(null);
    const [error,setError] = useState(false)

    useEffect(() => {
      axios('/api/v1/charitybase')
      .then(res => setAuth(res.data.data))
      .catch(err => setError(err))
    }, [])


    const regesteredWithAPI = string => {
      ReactGA.event({
        category: 'Quiz',
        action: `Registered: ${regestered}`,
        label: 'Answered'
      });
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

      initializaAnalytics()

      ReactGA.event({
        category: 'Quiz',
        action: `Charity Name: ${charityName}`,
        label: 'Answered'
      });

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
              setcharityBaseResult(data.CHC.getCharities.list)
            
            }
           
          })
      }  
      
      }
       
    
  
      return  (
        <>
         <p className='quiz_qiestions'> 1. Are you registered as a charity with the charity commission in England or Wales? </p>  
   <RadioGroup aria-label="radio buttons for" name="trustees" value={regestered} onChange={(event)=>{regesteredWithAPI(event.target.value)}}>
          <FormControlLabel value='true' control={<Radio />} label="Yes" />
          <FormControlLabel value='false' control={<Radio />} label="No" />
        </RadioGroup>
        <p className='quiz_qiestions'>2. What is your Charity's Name?</p>
        <input type='text' className='charity-name_input' value={charityName} onChange={e => setCharityName(e.target.value)} />
        <Button
              style={{ width: '49%' }}
              label="search"
              className="back secondary"
              onClick={handleValidation}
           >Search</Button>
        { !loading && charityBaseResult ? <List charities={charityBaseResult} setCharity={setCharityName} setSelectedCharityNum={setSelectedCharity} loading={loading}/> : null}
        </>
      )
    }
    
  