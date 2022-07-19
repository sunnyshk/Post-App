import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";

const PostDetails = ({ open, handleOpen, handleClose }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Add New Post
        </Button>
      </Box>
      <Dialog open={open} onCLose={handleClose}>
        <Box component="form">
          <DialogTitle>Post Detail</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="body"
              label="Body"
              fullWidth
              variant="standard"
              multiline
            />
            <TextField
              margin="dense"
              id="userId"
              label="User ID"
              fullWidth
              variant="standard"
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
            <DialogActions>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PostDetails;
