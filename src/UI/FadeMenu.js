import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import {Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
        <ListItemIcon>
            <ShoppingBasketIcon fontSize="small" />
        </ListItemIcon>
         
          <Link to = "/Cart">
          <ListItemText primary="Giỏ hàng" />
          </Link>
          
        </StyledMenuItem>

        <StyledMenuItem>
        <ListItemIcon>
            <VpnKeyIcon fontSize="small" />
          </ListItemIcon>
         
          <Link to = "/Login">
          <ListItemText primary="Đăng ký" />
          </Link>
          
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
            <LockOpenIcon fontSize="small" />
          </ListItemIcon>
          <Link to ="/Register">
          
          <ListItemText primary="Đăng nhập" />
          </Link>
          
        </StyledMenuItem>
        <StyledMenuItem> <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>

          <Link to = "/Profile">
         
          <ListItemText primary="Thông tin cá nhân" />
          </Link>
         
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}