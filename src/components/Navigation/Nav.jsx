import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Nav = () => {
  return (
    <div className="p-5 shadow-md bg-blue-400">
      <nav className="flex justify-center">
        <NavLink to="/">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                paddingTop: '7px',
                paddingBottom: '7px',
                paddingRight: '12px',
                paddingLeft: '12px',
              }}
            >
              HOME
            </Button>
          </Stack>
        </NavLink>
        <p className="text-5xl mb-5 font-thin">Contacts Maker</p>
        <NavLink to="/signup">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                paddingTop: '7px',
                paddingBottom: '7px',
                paddingRight: '12px',
                paddingLeft: '12px',
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </NavLink>
        <NavLink to="/signin">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                paddingTop: '7px',
                paddingBottom: '7px',
                paddingRight: '12px',
                paddingLeft: '12px',
              }}
            >
              Sign in
            </Button>
          </Stack>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
