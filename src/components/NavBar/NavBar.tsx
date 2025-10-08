import { AppBar, MenuItem, Toolbar } from "@mui/material";
import styled from "styled-components";

function NavBar() {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  }));

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
