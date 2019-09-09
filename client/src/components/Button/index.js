import React from 'react';

import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export default function Button(props) {
  const { label, style, done, rightIcon, leftIcon, onClick } = props;
  return (
        <button className={`button ${props.className}`} onClick={onClick}>
          {leftIcon? <FontAwesomeIcon icon={faArrowLeft} className=''/>: null}
            <span className='button-title'>{label}</span>
          {done? <FontAwesomeIcon icon={faCheckCircle} className='' />: null}
          {rightIcon? <FontAwesomeIcon icon={faArrowRight} className=''/>: null}
        </button>
  )
}
