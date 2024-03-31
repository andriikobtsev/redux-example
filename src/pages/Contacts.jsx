import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Stack } from '@mui/material';
import DocumentTitle from '../components/DocumentTitle';
import { ContactList } from '../components/ContactList/ContactList';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <div>{isLoading && 'Request in progress...'}</div>
      <Stack direction='column' spacing={3}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={6}>
            <SearchBox />
          </Grid>
        </Grid>
        <ContactList />
      </Stack>
    </>
  );
}
