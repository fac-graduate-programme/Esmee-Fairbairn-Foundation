import React from 'react';
import classes from './style.css'
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
  const { label, style, done, rightIcon, leftIcon, onClick } = props;
  return (
        <button className={classes.button} style={style} onClick={onClick}>
          {leftIcon? <FontAwesomeIcon icon={faArrowLeft}/>: null}
            <span>{label}</span>
          {done? <FontAwesomeIcon icon={faCheckCircle}/>: null}
          {rightIcon? <FontAwesomeIcon icon={faArrowRight}/>: null}
        </button>
  )
}
