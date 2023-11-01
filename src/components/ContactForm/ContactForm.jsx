import './ContactForm.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/reducer';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        console.log(`Something went wrong...`);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const contactData = { name, number, id: nanoid() };
    if (
      contacts.filter(contact => contact.name === contactData.name).length > 0
    ) {
      window.alert(`${contactData.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactData));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
