import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { changeFilter } from '../../redux/filter/slice';
import SearchIcon from '@mui/icons-material/Search';
import { selectNameFilter } from '../../redux/filter/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleSearch = evt => dispatch(changeFilter(evt.target.value));

  return (
    <TextField
      label="Search for contact"
      size="small"
      type="text"
      value={value}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
