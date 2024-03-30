import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import * as css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.ul}>
        {contacts.map((contact) => (
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
