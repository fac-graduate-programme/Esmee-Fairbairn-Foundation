import React from "react";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "./../Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const PopUp = props => {
  // Needs to be passed down as a prop
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Will remove button from this component after people have tested it
  return (
    <div>
      <button onClick={handleOpen}>Click Me</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...props}
      >
        <DialogTitle>
          Thank you. Your response has been processed successfully.
        </DialogTitle>
        <DialogActions>
          <div className="ok-button">
            <Button onClick={handleClose} className="ok">
              Ok
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUp;
