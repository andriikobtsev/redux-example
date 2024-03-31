import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { Box, Stack } from '@mui/material';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        className={css.ul}
      >
        {contacts.map(contact => (
          <Box key={contact.id} p={1}>
            <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
          </Box>
        ))}
      </Stack>
    </>
  );
};
