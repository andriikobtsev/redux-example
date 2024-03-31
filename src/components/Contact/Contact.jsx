import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Stack,
  Paper,
  TextField,
  FormControl,
  Box,
  Modal,
} from '@mui/material';
import * as Yup from 'yup';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import * as css from './Contact.module.css';

const ContactView = ({ name, number, editContact, openModal }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Paper elevation={5} sx={{width: 200}}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={name}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={number}></ListItemText>
          </ListItem>
        </List>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <IconButton edge="end" aria-label="delete" onClick={editContact}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={openModal}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Stack>
  );
};

const ContactEdit = ({ name, number, submitEdit, cancelEdit, id }) => {
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { username: name, number: number },
    validationSchema: schema,
    onSubmit: values => {
      submitEdit({
        id: id,
        name: values.username,
        number: values.number,
      });
    },
  });

  return (
    <Box>
      <Paper sx={{width: 200}}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <TextField
              name="username"
              variant="outlined"
              size="small"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            ></TextField>
            <TextField
              variant="outlined"
              size="small"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Button type="submit">Confirm</Button>
            <Button type="button" onClick={cancelEdit}>
              Cancel
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleUpdate = contact => dispatch(updateContact(contact));

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const submitEdit = contact => {
    handleUpdate(contact);
    setIsEditMode(false);
  };

  const editContact = () => setIsEditMode(true);
  const cancelEdit = () => setIsEditMode(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      {isEditMode ? (
        <ContactEdit
          name={name}
          number={number}
          submitEdit={submitEdit}
          cancelEdit={cancelEdit}
          id={id}
        />
      ) : (
        <ContactView
          name={name}
          number={number}
          editContact={editContact}
          openModal={openModal}
        />
      )}
      <Modal open={modalIsOpen} onClose={closeModal}>
        <Box sx={style}>
          <p>Are you sure you want to delete contact {name}?</p>
          <Button onClick={closeModal}>No</Button>
          <Button onClick={handleDelete}>Yes</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
