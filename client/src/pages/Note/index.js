import React, { Component } from 'react'

import Button from '../../components/Button'

import './style.css'

export default class Page2 extends Component {

  state = {
    guidlinesApproved: false,
    checked: false
  }
  
  handleCheckBox = () => {
    this.setState({
      guidlinesApproved: !this.state.guidlinesApproved,
      checked: !this.state.checked
    })
  }

  render() {
    
    const { handleStaticButton } = this.props;
    const { checked, guidlinesApproved } = this.state;

    return (
      <div className='page2'>
        <h1 className='page2-title'>Attention</h1>
        <br />
        <br />
        <p className='page2-paragraph'>
        We strongly advise you to read about what we fund and what we don’t fund. 
        </p>
        <br />
        <p className='page2-paragraph'>
        Please don’t try to fit a square peg into a round hole - if your work genuinely doesn’t fit with our priorities then your efforts may be better focused on applying to other funders.
        </p>
        <br />
        <div className='page2-note'>
          <p className='page2-paragraph'>
            Please read the application guidelines before continue with this application.
          </p>
          <br />
          You can find them
          <a href='https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf' rel="noopener noreferrer" target='_blank' className='page2-note-link' > here</a>.
          <br />
          <br />
          <input type="checkbox" id='checkbox' name="check" onChange={this.handleCheckBox} checked={checked} />
          <label for='checkbox'>
            I have read the application guidelines
          </label>
        </div>
        <Button className='page2-btn' onClick={handleStaticButton} disabled={!guidlinesApproved} >PROCEED</Button>
      </div>
    )
  }
}
