import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { AppBar as AppBarMaterial, Toolbar, Box } from '@mui/material';
import { useAuth } from '../../hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box mb={3}>
      <AppBarMaterial position="static">
      <Toolbar className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarMaterial>
    </Box>
  );
};
