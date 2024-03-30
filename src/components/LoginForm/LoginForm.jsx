import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(
      logIn({
        email: form.email,
        password: form.password,
      })
    );
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
      initialValues={initialValues}
    >
      <Form className={css.form} autoComplete="off">
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
