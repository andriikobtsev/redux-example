import { useDispatch } from 'react-redux';
import { Button, TextField, FormControl } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../redux/contacts/operations';
import * as css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleAdd = contact => dispatch(addContact(contact));

  const nameFieldId = useId();
  const numberFieldId = useId();
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(50, <span className={css.error}>Too Long!</span>)
      .required(<span className={css.error}>Required</span>),
    number: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .max(20, 'Number too long!')
      .required(<span className={css.error}>Required</span>),
  });

  const initialValues = {
    username: '',
    number: '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      handleAdd({
        username: values.username,
        name: values.username,
        number: values.number,
      });
      actions.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormControl className={css.form}>
        <TextField
            name="username"
            variant='outlined'
            label='Name'
            size='small'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            id={nameFieldId}
          ></TextField>
          <TextField
            label='Number'
            variant='outlined'
            size='small'
            name="number"
            id={numberFieldId}
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <Button variant="contained" type="submit">
            Add contact
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
