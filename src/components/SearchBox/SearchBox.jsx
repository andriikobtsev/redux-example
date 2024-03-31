import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { changeFilter } from '../../redux/filter/slice';
import { selectNameFilter } from '../../redux/filter/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleSearch = evt => dispatch(changeFilter(evt.target.value));

  return (
    <TextField
      label="Search for contact"
      size='small'
      type="text"
      value={value}
      onChange={handleSearch}
    ></TextField>
  );
};
