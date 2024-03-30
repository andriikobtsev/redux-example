import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(
      register({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(<span className={css.error}>email format is incorrect</span>)
      .required(<span className={css.error}>Required</span>),
    password: Yup.string()
      .min(
        7,
        <span className={css.error}>
          Password must be at least 7 characters long
        </span>
      )
      .required(<span className={css.error}>Required</span>),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
      initialValues={initialValues}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" as="span"></ErrorMessage>
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" as="span"></ErrorMessage>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" as="span"></ErrorMessage>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
