import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box className={css.wrapper}>
      <Typography className={css.username}>Welcome, {user.name}</Typography>
      <Button color='inherit' onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
