import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { FormControl, TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(
      register({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Email format is incorrect').required('Required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
    initialValues: initialValues,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <FormControl sx={{ gap: '10px' }}>
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            size="small"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          ></TextField>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
          <TextField
            type="password"
            name="password"
            variant="outlined"
            label="Password"
            size="small"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></TextField>
          <Button type="submit">Register</Button>
        </FormControl>
      </form>
    </div>
  );
};
