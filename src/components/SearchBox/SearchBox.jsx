import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as css from "./SearchBox.module.css";
import { changeFilter } from '../../redux/filter/slice';
import { selectNameFilter } from '../../redux/filter/selectors';

export const SearchBox = () => {
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
