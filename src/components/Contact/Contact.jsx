import { useDispatch } from 'react-redux';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { deleteContact } from '../../redux/contactsOps';
import * as css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.card}>
      <div className={css.list}>
        <p className={css.contact}>
          <IoPerson size={20} /> {name}
        </p>
        <p className={css.contact}>
          <FaPhoneAlt size={20} /> {number}
        </p>
      </div>
      <div className={css.delete}>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
