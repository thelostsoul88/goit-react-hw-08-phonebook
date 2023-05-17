import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Nav from '../Navigation/Nav';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};

export default Layout;
