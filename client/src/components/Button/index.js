import React from 'react';
import classes from './style.css'
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
  return (
        <button className={classes.button} style={props.style} onClick={props.onClick}>
          {props.leftIcon? <FontAwesomeIcon icon={faArrowLeft}/>: null}
            <span>{props.label}</span>
          {props.done? <FontAwesomeIcon icon={faCheckCircle}/>: null}
          {props.rightIcon? <FontAwesomeIcon icon={faArrowRight}/>: null}
        </button>
  )
}
