import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from "redux/contactsApi";
import { selectFilter } from "redux/selectors";

const ContactItems = ({ id, name, number }) => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts && (
        <>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                key={id}
              >
                <TableCell align="left">{id}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{number}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteContacts(id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </>
      )}
    </>
  );
};
export default ContactItems;
