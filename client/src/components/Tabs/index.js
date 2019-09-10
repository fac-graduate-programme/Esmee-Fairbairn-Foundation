import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import CustomTab from '../Tab'
import Review from '../Review'
import Button from '../Button'
import TabBody from '../TabBody'
import './style.css'

function TabPanel(props) {

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#EDEDED',
    width: '60%', // Change the container width
    margin: "0 auto",
      ['@media (max-width:780px)']: {
       width: '100%'
      }
    },
    indicator: {
    height: 0,
    },
}))

export default function FullWidthTabs(props) {

  const { questions } = props;
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const classes = useStyles()
  const theme = useTheme();
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  function handleChangeIndex(index) {
    setValue(index)
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
            <CustomTab label="Question 1" {...a11yProps(0)} />
            <CustomTab label="Question 2" {...a11yProps(1)} />
            <CustomTab label="Question 3" {...a11yProps(2)} />
            <CustomTab label="Review" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <TabBody
            tips = {questions[0].tips}
            question = {questions[0].title}
            expectations = {questions[0].expectations}
            href="facebook.com"
            wordsLimit= {questions[0].wordsLimit}
            onChange={e => setAnswer1(e.target.value)}
          />
          <div className='tabs'>
            <Button  style={{backgroundColor: '#5C595B'}} label='back' leftIcon className='back'>
              back
            </Button>
            <Button style={{backgroundColor: '#E60085'}} label='next' rightIcon onClick={()=> setValue(1)} className='next'>
              next
            </Button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <TabBody
              tips = {questions[1].tips}
              question = {questions[1].title}
              expectations = {questions[1].expectations}
              href="facebook.com"
              wordsLimit= {questions[1].wordsLimit}
              onChange={e => setAnswer2(e.target.value)}
          />
          <div className='tabs'>
            <Button  style={{backgroundColor: '#5C595B'}} label='back' leftIcon onClick={()=>setValue(0)} className='back'>
              back
            </Button>
            <Button style={{backgroundColor: '#E60085'}} label='next' rightIcon onClick={()=> setValue(2)} className='next'>
              next
            </Button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <TabBody
            tips = {questions[2].tips}
            question = {questions[2].title}
            expectations = {questions[2].expectations}
            href="facebook.com"
            wordsLimit= {questions[2].wordsLimit}
            onChange={e => setAnswer3(e.target.value)}
          />
          <div className='tabs'>
            <Button  style={{backgroundColor: '#5C595B'}} label='back' leftIcon onClick={()=> setValue(1)} className='back'>
              back
            </Button>
            <Button style={{backgroundColor: '#E60085'}} label='next' rightIcon onClick={()=> setValue(3)} className='next'>
              next
            </Button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Review
            questions={[questions[0].title, questions[1].title, questions[2].title]}
            answers={[answer1, answer2, answer3]}
          />
          <div className='tabs'>
            <Button  style={{backgroundColor: '#5C595B', width:'49%'}} label='back' leftIcon onClick={()=> setValue(2)} className='back'>
              back
            </Button>
            <Button style={{backgroundColor: 'green', width:'49%'}} label='submit' doneIcon className='done'>
              submit
            </Button>
          </div>
        </TabPanel>

      </SwipeableViews>
    </div>
  )
}
