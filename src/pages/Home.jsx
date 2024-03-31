import HomeIcon from '@mui/icons-material/Home';
import DocumentTitle from '../components/DocumentTitle';
import { Box, Typography } from '@mui/material';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <Box style={styles.container}>
        <HomeIcon sx={{ width: 100, heigth: 100 }} fontSize="large" />
        <Typography variant="h3">Contacts book</Typography>
      </Box>
    </>
  );
}
