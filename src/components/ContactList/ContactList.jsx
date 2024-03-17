import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import * as css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getFilteredConatcs = (contacts, filter) => {
  return contacts.filter(
    (contact) =>
      contact.name &&
      contact.name
        .toLowerCase()
        .split(" ")
        .some((c) => c.startsWith(filter.toLowerCase()))
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);
  const filteredContacts = getFilteredConatcs(contacts, searchValue);

  return (
    <>
      <ul className={css.ul}>
        {filteredContacts.map((contact) => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
