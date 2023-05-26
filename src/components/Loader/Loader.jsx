import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import './Loader.css';

export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box sx={{ display: 'flex' }}>
        {/* <div className="spinner"></div> */}
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </Box>
    </Backdrop>
  );
};
