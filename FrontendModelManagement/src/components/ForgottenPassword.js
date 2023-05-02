import { useState } from "react";
import { Box, Link, Modal, Typography } from "@mui/material";

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link href="#" variant="body2" onClick={handleOpen}>
        Forgot password?
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "66%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Forgotten Password?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Have you tried asdfQWER or Pas123?
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ForgotPassword;
