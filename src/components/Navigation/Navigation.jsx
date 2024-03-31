import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Box, Typography } from '@mui/material';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Typography component={NavLink} className={css.link} to="/">
        Home
      </Typography>
      {isLoggedIn && (
        <Typography component={NavLink} className={css.link} to="/contacts">
          Contacts
        </Typography>
      )}
    </Box>
  );
};
