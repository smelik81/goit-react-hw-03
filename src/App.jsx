import initialContacts from './contacts.json';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearcBox from './components/SearchBox/SearchBox';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearcBox />
      <ContactList contact={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
