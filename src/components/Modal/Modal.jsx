import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  border: '2px solid colors.grey',
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  backgroundColor: 'white',
};
const BaseModal = ({ children }) => {
  return (
    <Modal open={true}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
export default BaseModal;
