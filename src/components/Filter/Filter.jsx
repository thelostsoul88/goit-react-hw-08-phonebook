import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filter } from 'redux/contacts/contactsSlice';
import { Box, Button, Input, InputAdornment, Stack } from '@mui/material';
import { AddContact } from 'components/AddContact';
import { BiSearchAlt } from 'react-icons/bi';

const btnAdd = {
  color: 'white',
  outline: 'none',
  fontSize: 16,
  px: 3,
  border: '1px solid #646cff',
  '&:hover': {
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid #646cff',
  },
};

export const Filter = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filter(e.currentTarget.value));
  };

  const handleClick = () => {
    setShowAddContact(showAddContact => !showAddContact);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="baseline"
      marginTop={4}
    >
      <Box component="div" position="relative">
        <Button
          type="button"
          onClick={handleClick}
          variant="outlined"
          sx={btnAdd}
        >
          Add contact
        </Button>
        {showAddContact && <AddContact handleClick={handleClick} />}
      </Box>
      <div className="ml-10"></div>
      <Box component="div">
        <Input
          placeholder="Find contact by name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={handleChange}
          value={currentFilter}
          sx={{
            color: 'white',
          }}
          startAdornment={
            <InputAdornment position="start" sx={{ color: '#646cff' }}>
              <BiSearchAlt />
            </InputAdornment>
          }
        />
      </Box>
    </Stack>
  );
};
