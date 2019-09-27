import React from "react";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "./../Button";
import DialogTitle from "@material-ui/core/DialogTitle";

const PopUp = ({open, setOpen, ...props}) => {

  const handleClose = () => {
    setOpen(false);
     //redirect to page 1 after?
  };
 
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...props}
      > <div className="custom-success-popup">
        <DialogTitle>
          Thank you. <br/> Your response has been processed successfully.
        </DialogTitle>
        <DialogActions>
          <div className="ok-button">
            <Button onClick={handleClose} className="ok">
              Ok
            </Button>
          </div>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default PopUp;
