import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { Stack } from '@mui/material';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
      >
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          />
        ))}
      </Stack>
    </>
  );
};
