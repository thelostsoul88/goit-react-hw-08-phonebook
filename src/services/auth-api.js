import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const postSignUp = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setHeader(data.token);
  return data;
};

export const postSignIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setHeader(data.token);
  return data;
};

export const postSignout = async () => {
  const { data } = await axios.post('/users/logout');
  clearHeader();
  return data;
};

export const getUserRefresh = async (_, { getState }) => {
  const { token } = getState().auth;
  if (!token) {
    return toast.error('Unvalid token!');
  }
  setHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
};
