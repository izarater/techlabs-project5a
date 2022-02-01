import { Link } from 'react-router-dom';
import Button from '../button/button';
import { useState } from 'react'

import { Avatar, Tooltip, IconButton,ListItemIcon, Menu, MenuItem, Divider } from '@mui/material';
import { Settings, Logout, PersonAdd, ChangeCircle } from '@mui/icons-material';

import { Box } from '@mui/system';

import './navbar.css';

import { useSelector} from 'react-redux'

import ChangePassword from '../changePassword/ChangePassword';


//uso de redux
import { useDispatch } from 'react-redux';
// import { logoutAction }

function NavbarDesktop() {
  const userData = useSelector(state => state.authentication.userData)
  // console.log(userData)

  // funcionalidad del boton de usuario
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="header">
        <h2>SaveFood</h2>
        <ul className="nav" id="nav">
          <li className="nav-item">
            <Link className="nav-link bold" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item menum">
            <Link className="nav-link" to="/discovery">
              Discovery
            </Link>
          </li>
          {
            !userData? 
            <>
              <Link to="/login">
                <Button variant="primary">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="secondary">Sign Up</Button>
              </Link>
            </> : 
            <>
              <Box>
                <Tooltip title= {userData.username}>
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar>
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    // onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>

                    <MenuItem>
                      <Avatar /> My account
                    </MenuItem>

                    <Divider />

                    <MenuItem>
                      <ListItemIcon>
                        <ChangeCircle fontSize="small" />
                      </ListItemIcon>
                      {/* Change password */}
                      <ChangePassword onClick={handleClick}/>
                    </MenuItem>

                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>

                    <MenuItem >
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
              </Box>
            </>
          }
          
        </ul>
      </header>
    </>
  );
}

export default NavbarDesktop;
