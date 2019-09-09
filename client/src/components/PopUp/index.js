import React from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";

const PopUp = props => {
  return (
    <Modal {...props}>
      <Modal.Body>
        <p>{props.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
