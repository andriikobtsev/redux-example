import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      <Button color='inherit' component={NavLink} className={css.link} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button color='inherit' component={NavLink} className={css.link} to="/contacts">
          Contacts
        </Button>
      )}
    </Box>
  );
};
