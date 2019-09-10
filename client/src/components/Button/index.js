import React from 'react'

import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export default function Button(props) {
  const { label, style, doneIcon, rightIcon, leftIcon, onClick } = props;
  return (
        <button className={`button ${props.className}`} onClick={onClick}>
          {leftIcon ? <FontAwesomeIcon icon={faArrowLeft} /> : null}
          <span className='button-title'>{label}</span>
          {done ? <FontAwesomeIcon icon={faCheckCircle} /> : null}
          {rightIcon ? <FontAwesomeIcon icon={faArrowRight} /> : null}
        </button>
  )
}
