import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./App.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { fetchContacts } from '../redux/contactsOps';
import { selectIsLoading, selectError } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ marginLeft: "10px" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      {error}
      <ContactList />
    </div>
  );
};

export default App;
