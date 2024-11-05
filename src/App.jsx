import ContactForm from './components/ContactForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from './redux/contactsSlice';

const App = () => {
    const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
