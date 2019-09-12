import React from "react";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "./../Button";
import DialogTitle from "@material-ui/core/DialogTitle";

const PopUp = props => {
  // Needs to be passed down as a prop
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen}>Click Me</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Success pop-up"
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
