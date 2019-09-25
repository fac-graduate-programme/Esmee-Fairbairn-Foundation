import React from 'react'

import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export default function Button(props) {
  const { children, doneIcon, rightIcon, leftIcon, onClick, className, hide } = props;
  const hideButton = hide ===0? 'hide': null;
  return (
    <button className={`button ${className} ${hideButton}`} onClick={onClick}>
      {leftIcon ? <FontAwesomeIcon icon={faArrowLeft} /> : null}
      <span className='button-title'>{children}</span>
      {doneIcon ? <FontAwesomeIcon icon={faCheckCircle} /> : null}
      {rightIcon ? <FontAwesomeIcon icon={faArrowRight} /> : null}
    </button>
  )
}

