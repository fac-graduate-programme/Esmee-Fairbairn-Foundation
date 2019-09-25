import React, { useState } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import CustomTab from '../../components/Tab'
import Review from '../../components/Review'
import Button from '../../components/Button'
import TabBody from '../../components/TabBody'
import Loading from '../../components/Loading'
import Popup from '../../components/PopUp'
import './style.css'

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '700px',
    maxWidth: '700px',
    margin: '0 auto',
    ['@media (max-width:780px)']: {
      width: '100%'
    }
  },
  indicator: {
    height: 0
  }
}))

const Page4 = props => {
  const { questions } = props
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  const setAnswer = (index, value) => {
    switch(index) {
      case 1 : setAnswer1(value); break;
      case 2 : setAnswer2(value); break;
      case 3 : setAnswer3(value); break;
    }
  }

  const handleSubmit = () => {
    if (
      answer1.split(' ')[0] === '' ||
      answer1.split(' ').length > questions[0].wordsLimit ||
      answer2.split(' ')[0] === '' ||
      answer2.split(' ').length > questions[1].wordsLimit ||
      answer3.split(' ')[0] === '' ||
      answer3.split(' ').length > questions[2].wordsLimit
    ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text:
          'Make sure you answered all questions without exceeding word limits!'
      })
    }
else{
  setLoading(true)
  axios({
    method: 'POST',
    url: '/api/v1/answers',
    headers: { 'content-type': 'application/json' },
    data: {
      answer1: answer1,
      answer2: answer2,
      answer3: answer3
    }
  })
    .then(({ data, error }) => {
      setLoading(false)
      if (error) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please resubmit your application.'
        })
      } else{
        setOpen(true)
      }
     
    })
    .catch(err => {
      setLoading(false)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please resubmit your application.'
      })
    })}
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          classes={{ indicator: classes.indicator }}
        >
          <CustomTab label="Question 1" />
          <CustomTab label="Question 2" />
          <CustomTab label="Question 3" />
          <CustomTab label="Review" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        {questions.slice(0,3).map((question, index) => {
              return(<TabPanel key={question.id} value={value} index={index} dir={theme.direction}>
              <TabBody
                question = {question}
                onChangeAnswer={e => setAnswer(index+1, e.target.value)}
              />
              <div className='tabs'>
                <Button label='back' leftIcon onClick={()=> setValue(index-1)} className='back'>
                  back
                </Button>
                <Button label='next' rightIcon onClick={()=> setValue(index+1)} className='next'>
                  next
                </Button>
              </div>
            </TabPanel>)
        })}

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Review
            questions={[
              questions[0],
              questions[1],
              questions[2]
            ]}
            answers={[answer1, answer2, answer3]}
          />
          <div className="tabs">
            <Button
              label="back"
              leftIcon
              onClick={() => setValue(2)}
              className="back"
            >
              back
            </Button>
            <Button
              style={{ width: '49%' }}
              label="submit"
              doneIcon
              className="done"
              onClick={handleSubmit}
            >
              submit
            </Button>
          </div>
        </TabPanel>
      </SwipeableViews>
      {loading ? <Loading className="answers__submition" /> : null}
        <Popup open={open} setOpen={setOpen} />
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default Page4;