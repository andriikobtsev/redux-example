import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box mr={2}>
      <Button color='inherit' component={NavLink} to="/register">
        Register
      </Button>
      <Button color='inherit' component={NavLink} to="/login">
        Log In
      </Button>
    </Box>
  );
};
