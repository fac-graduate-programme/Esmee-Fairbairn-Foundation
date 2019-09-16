import React, { Component } from 'react'

import Page1 from './pages/Welcome'
import Page2 from './pages/Note'
import Page3 from './pages/Tips'
import Page4 from './pages/Questions'
import logo from './assets/title-logo.svg'

import './style.css'

export default class App extends Component {
  
  state = {
    pageNumber: 1
  }

  handleStaticButton = () => {
    this.setState((state) => {
      return {pageNumber: state.pageNumber + 1}
    })
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="app">
        <img src={logo} className='app-logo' />

        {pageNumber !== 1 && pageNumber !==2 ? (
          <h4 className='app-subTitle' >Refer to <a href='https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf' target='_blank' className='app-subTitle--link'> application guidelines</a></h4>
        ) : (
          null
        )}
        
        {pageNumber === 1 ? <Page1 handleStaticButton = {this.handleStaticButton}  /> : null}
        {pageNumber === 2 ? <Page2 handleStaticButton = {this.handleStaticButton}  /> : null}
        {pageNumber === 3 ? <Page3 handleStaticButton = {this.handleStaticButton}  /> : null}
        {pageNumber === 4 ? <Page4 /> : null}
        
    </div>
    )
  }
}