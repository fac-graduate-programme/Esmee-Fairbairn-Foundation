import React from 'react';
import classes from './style.css'

export default function TabBody(props) {
  return (
    <container className={classes.textarea}>
      <p>use up to {props.wordsLimit} words...</p>
      <textarea placeholder='Type here...' onChange={props.onChange} />
    </container>
  );
}
