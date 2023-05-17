import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { filterContact } from 'redux/reducer';
import { BiSearchAlt } from 'react-icons/bi';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = useSelector(selectFilter);
  return (
    <div className="flex justify-center mt-5">
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}></Box>
      <TextField
        value={handleFilter}
        onChange={e => dispatch(filterContact(e.currentTarget.value.trim()))}
        label="Find contacts by name"
        id="standard-start-adornment"
        sx={{ m: 1, width: '40ch' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BiSearchAlt />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box />
    </div>
  );
};
export default Filter;
