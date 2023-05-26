import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#646cff',
  border: '2px solid colors.grey',
  borderRadius: 5,
  boxShadow: 24,
  p: 3,
};

export const BasicModal = ({ children }) => {
  return (
    <Modal open={true}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
