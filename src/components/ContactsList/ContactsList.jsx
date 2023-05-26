import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/contacts/selectors';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Stack,
} from '@mui/material';

const tableCell = {
  fontSize: 20,
  fontWeight: 600,
  color: 'white',
  backgroundColor: '#646cff',
};
const tableCellRow = {
  fontSize: 16,
  color: 'white',
  backgroundColor: '#646cff',
};

export const ContactsList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ minWidth: 650 }}>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: '10px',
          }}
        >
          <Table sx={{ minWidth: 400 }} aria-label="caption table">
            <TableHead>
              <TableRow sx={tableCell}>
                <TableCell align="left" sx={tableCell}>
                  NAME
                </TableCell>
                <TableCell align="center" sx={tableCell}>
                  NUMBER
                </TableCell>
                <TableCell align="left" sx={tableCell}>
                  OPTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleContacts.map(({ name, number, id }) => (
                <TableRow key={id}>
                  <TableCell align="left" sx={tableCellRow}>
                    {name}
                  </TableCell>
                  <TableCell align="center" sx={tableCellRow}>
                    {number}
                  </TableCell>
                  <TableCell align="center" sx={tableCellRow}>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        size="sm"
                        color="error"
                        disabled={isLoading}
                        onClick={() => deleteContact(id)}
                        sx={{
                          color: 'white',
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
