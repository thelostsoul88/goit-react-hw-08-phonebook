import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loader = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </Backdrop>
    </div>
  );
};

export default Loader;
