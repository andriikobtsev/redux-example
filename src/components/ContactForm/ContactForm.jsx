import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { addContact } from '../../redux/contactsSlice';
import * as css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch()
  const handleAdd = (contact) => dispatch(addContact(contact));

  const nameFieldId = useId();
  const numberFieldId = useId();
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

  const initialValues = {
    username: "",
    number: "",
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleAdd({
          username: values.username,
          number: values.number,
        });
        actions.resetForm();
      }}
    >
      <Form className={css.wind}>
        <div className={css.form}>
          <h2 className={css.name}>Name</h2>
          <label htmlFor={nameFieldId}></label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          ></Field>
          <ErrorMessage name="username" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <h2 className={css.name}>Number</h2>
          <label htmlFor={numberFieldId}></label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage name="number" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <button className={css.btnadd} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
