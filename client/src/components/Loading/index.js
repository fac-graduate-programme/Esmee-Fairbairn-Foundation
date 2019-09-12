import React from "react";
import "./style.css";

export default ({ className }) => {
  return <div className={`loader ${className}`}></div>;
};
