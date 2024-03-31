import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { FormControl, TextField, Button } from '@mui/material';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(
      logIn({
        email: form.email,
        password: form.password,
      })
    );
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
    initialValues: initialValues,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <FormControl sx={{gap: '10px'}}>
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
          <Button type="submit">Login</Button>
        </FormControl>
      </form>
    </div>
  );
};
