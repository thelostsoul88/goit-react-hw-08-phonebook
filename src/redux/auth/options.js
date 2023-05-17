import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserRefresh,
  postSignIn,
  postSignUp,
  postSignout,
} from 'services/auth-api';

export const signUp = createAsyncThunk('auth/signup', () => {
  return postSignUp();
});

export const signIn = createAsyncThunk('auth/signin', () => {
  return postSignIn();
});

export const signOut = createAsyncThunk('auth/signout', () => {
  return postSignout();
});

export const refresh = createAsyncThunk('auth/refresh', () => {
  return getUserRefresh();
});
