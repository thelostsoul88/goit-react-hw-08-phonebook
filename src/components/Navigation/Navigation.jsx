import { NavLink } from 'react-router-dom';

import { Box, Button } from '@mui/material';

export const Navigation = () => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 4 }}>
      <NavLink to="/">
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
          Home
        </Button>
      </NavLink>
    </Box>
  );
};
