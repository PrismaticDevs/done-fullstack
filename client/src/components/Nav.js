import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Nav;
