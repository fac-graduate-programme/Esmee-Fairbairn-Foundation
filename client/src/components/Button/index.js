import React from "react";

import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

export default function Button({
  children,
  onClick = undefined,
  className = "",
  type = "button",
  leftIcon = undefined,
  done = undefined,
  rightIcon = undefined
}) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {leftIcon ? <FontAwesomeIcon icon={faArrowLeft} /> : null}
      {children}
      {done ? <FontAwesomeIcon icon={faCheckCircle} /> : null}
      {rightIcon ? <FontAwesomeIcon icon={faArrowRight} /> : null}
    </button>
  );
}
