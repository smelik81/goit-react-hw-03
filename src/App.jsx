import initialContacts from './contacts.json';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearcBox from './components/SearchBox/SearchBox';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newUser => {
    setContacts(prevContacts => {
      return [...prevContacts, newUser];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearcBox value={filter} onChange={setFilter} />
      <ContactList contact={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
