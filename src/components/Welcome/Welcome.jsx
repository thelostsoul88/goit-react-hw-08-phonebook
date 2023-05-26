import { Box, Button, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20vh',
      }}
    >
      <Typography
        component={Paper}
        sx={{
          fontSize: 36,
          fontWeight: 500,
          color: '#646cff',
          textAlign: 'center',
          padding: 2,
          maxWidth: 500,
          backgroundColor: 'transparent',
        }}
      >
        Welcome to contacts app{' '}
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: 'colors.grey',
          }}
        ></Typography>{' '}
        please sign in or sign up.
      </Typography>
      <NavLink to="/contacts">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: '#646cff',
            outline: 'none',
            fontSize: 16,
            px: 3,
            py: 2,
            '&:hover': {
              backgroundColor: '#646cff',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: '#646cff',
              color: 'colors.grey',
              border: '1px solid transparent',
            },
          }}
        >
          Start Contacts
        </Button>
      </NavLink>
    </Box>
  );
};
