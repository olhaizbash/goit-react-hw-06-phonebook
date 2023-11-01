import css from './ContactList.module.css';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from 'redux/reducer';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span>{number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(removeUser(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
