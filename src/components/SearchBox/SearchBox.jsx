import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as css from "./SearchBox.module.css";
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter)
  const handleSearch = (evt) => dispatch(changeFilter(evt.target.value));
  
  return (
    <div className={css.search}>
      <p className={css.noMargin}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default SearchBox;
