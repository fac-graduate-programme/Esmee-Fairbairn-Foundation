import React from "react"

import "./style.css"

export default function Button({
  children,
  onClick = undefined,
  className = "",
  type = "button",
}) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick} >
      {children}
    </button>
  );
}
