import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const Navbar = () => {
  return <div>
    <Box sx={{flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <GroupIcon sx={{mr:1}}/>
                <Typography variant="h6" componet="div" sc={{flexGrow:1, alignItems:"center"}}>
                    Post Manager
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  </div>;
};

export default Navbar;
