import { Link } from 'react-router-dom';
import Button from '../button/button';

import { Avatar, Tooltip, IconButton } from '@mui/material';
import { Box } from '@mui/system';

import './navbar.css';

import { useSelector} from 'react-redux'

function NavbarDesktop() {
  const userData = useSelector(state => state.authentication.userData)
  // console.log(userData)
  
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
              Restaurants
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
                  <IconButton>
                    <Avatar>

                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          }
          
        </ul>
      </header>
    </>
  );
}

export default NavbarDesktop;
