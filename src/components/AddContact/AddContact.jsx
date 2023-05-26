import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import 'react-toastify/dist/ReactToastify.css';

const containerAdd = {
  position: 'absolute',
  top: 80,
  right: 80,
  p: 2,
  width: 300,
  zIndex: 1,
  backgroundColor: '#646cff',
};

export const AddContact = ({ handleClick }) => {
  const [addContact] = useAddContactMutation();

  const { data: contacts = [] } = useGetContactsQuery();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );

    try {
      duplicate
        ? toast.warn(`${name} is already in contacts.`, {
            theme: 'colored',
            autoClose: 2000,
          })
        : await addContact({ name, number });
    } catch (error) {
      toast.error(`Error - ${error.message}`, {
        theme: 'colored',
        autoClose: 2000,
      });
    }
    form.reset();
  };

  return (
    <Box component={Paper} sx={containerAdd}>
      <Box component="form" onSubmit={handleSubmitForm}>
        <Stack direction="column" spacing={2}>
          <TextField
            autoFocus
            autoComplete="off"
            required
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            sx={{
              color: 'white',
            }}
          />
          <TextField
            autoComplete="off"
            required
            name="number"
            type="tel"
            label="Number"
            variant="outlined"
            sx={{
              color: 'white',
            }}
          />
          <Stack direction="row" justifyContent="center" spacing={5}>
            <Button
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
              }}
              onClick={handleClick}
            >
              Close
            </Button>
            <Button
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
              }}
              type={'submit'}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
