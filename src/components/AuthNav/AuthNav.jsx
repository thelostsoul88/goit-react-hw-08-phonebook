import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 4 }}>
      <NavLink to="/register">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: 'white',
            outline: 'none',
            fontSize: 16,
            px: 3,
            '&:hover': {
              backgroundColor: 'white',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: 'white',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
          }}
        >
          Sign up
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: 'white',
            outline: 'none',
            fontSize: 16,
            px: 3,
            '&:hover': {
              backgroundColor: 'white',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: 'white',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
          }}
        >
          Sign in
        </Button>
      </NavLink>
    </Box>
  );
};
