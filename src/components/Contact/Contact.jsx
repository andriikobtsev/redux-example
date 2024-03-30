import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import * as css from "./Contact.module.css";

Modal.setAppElement("#root");

const ContactView = ({name, number, editContact, openModal}) => {
  return (
    <div>
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
          <button onClick={editContact}>Edit</button>
        </div>
        <div className={css.delete}>
          <button onClick={openModal}>Delete</button>
        </div>
      </li>
    </div>
  );
};

const ContactEdit = ({name, number, submitEdit, cancelEdit, id}) => {
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(50, <span className={css.error}>Too Long!</span>)
      .required(<span className={css.error}>Required</span>),
    number: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(20, "Number too long!")
      .required(<span className={css.error}>Required</span>),
  });
  
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ username: name, number: number }}
      validationSchema={schema}
      onSubmit={(values) => {
        submitEdit({
          id: id,
          name: values.username,
          number: values.number
        });
      }}
    >
      <Form className={css.wind}>
        <div className={css.form}>
          <h2 className={css.name}>Name</h2>
          <Field
            className={css.field}
            type="text"
            name="username"
            values={name}
          ></Field>
          <ErrorMessage name="username" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <h2 className={css.name}>Number</h2>
          <Field
            className={css.field}
            type="text"
            name="number"
            values={number}
          ></Field>
          <ErrorMessage name="number" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <button className={css.btnadd} type="submit">
            Confirm
          </button>
          <button className={css.btnadd} type="button" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleUpdate = (contact) => dispatch(updateContact(contact));

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const submitEdit = (contact) => {
    handleUpdate(contact)
    setIsEditMode(false);
  };

  const editContact = () => {
    setIsEditMode(true);
  };

  const cancelEdit = () => {
    setIsEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      {isEditMode
        ? <ContactEdit name={name} number={number} submitEdit={submitEdit} cancelEdit={cancelEdit} id={id}/>
        : <ContactView name={name} number={number} editContact={editContact} openModal={openModal}/>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>Are you sure you want to delete contact {name}?</p>
        <button onClick={closeModal}>No</button>
        <button onClick={handleDelete}>Yes</button>
      </Modal>
    </div>
  );
};

export default Contact;
