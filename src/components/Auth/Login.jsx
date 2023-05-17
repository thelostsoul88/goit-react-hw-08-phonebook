import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
  Typography,
  TextField,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import BaseModal from '../Modal/Modal';

const Login = () => {
  //   const [showLoginForm, setShowLoginForm] = useState(true);
  //   //   const [showPassword, setShowPassword] = useState(false);

  //   const navigate = useNavigate();

  //   const handleClickShowPassword = () => setShowPassword(show => !show);
  //   const handleClose = () => {
  //     setShowLoginForm(false);
  //   };

  //   if (!showLoginForm) {
  //     navigate('/');
  //   }

  const { control, handleSubmit } = useForm();
  return (
    <BaseModal>
      <Box component="form" onSubmit={handleSubmit()}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required',
            minLength: {
              value: '@',
              message: 'Email should be at least 2 characters',
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              autoFocus
              autoComplete="off"
              required
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters',
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              autoComplete="off"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
        <DialogActions>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            sx={{
              ':hover': {
                background: 'green',
              },
            }}
          >
            Sign In
          </Button>
        </DialogActions>
        <Box
          component="div"
          sx={{
            mt: 2,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: 11,
              textAlign: 'center',
              color: 'colors.grey',
            }}
          >
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </BaseModal>
  );
};
export default Login;
