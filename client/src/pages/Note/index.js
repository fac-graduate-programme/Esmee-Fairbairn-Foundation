import React, { useState } from 'react';
import Swal from 'sweetalert2';

import Button from '../../components/Button';

import './style.css';

export default props => {
  const [guidlinesApproved, setGuideApproved] = useState(false);
  const proceed = () => {
    if (guidlinesApproved) props.handleStaticButton();
    else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text:
          'Make sure you read the application guidelines before starting an application!'
      });
    }
  };

  return (
    <div className="page2">
      <h1 className="page2-title">Attention</h1>
      <br />
      <br />
      <p className="page2-paragraph">
        We strongly advise you to read about what we fund and what we don’t
        fund.
      </p>
      <br />
      <p className="page2-paragraph">
        Please don’t try to fit a square peg into a round hole - if your work
        genuinely doesn’t fit with our priorities then your efforts may be
        better focused on applying to other funders.
      </p>
      <br />
      <div className="page2-note">
        <p className="page2-paragraph">
          Please read the application guidelines before continue with this
          application.
        </p>
        <br />
        <p>
          You can find them
          <a
            href="https://www.esmeefairbairn.org.uk/userfiles/Documents/Application%20Forms/GuidanceforGrantApplicants.pdf"
            target="_blank"
            className="page2-note-link"
          >
            {' '}
            here.
          </a>
        </p>
        <br />
        <br />
        <input
          type="checkbox"
          id="checkbox"
          name="check"
          onChange={() => setGuideApproved(!guidlinesApproved)}
          checked={guidlinesApproved}
        />
        <label htmlFor="checkbox"> I have read the application guidelines</label>
      </div>
      <Button className="page2-btn" onClick={proceed}>
        PROCEED
      </Button>
    </div>
  );
};
