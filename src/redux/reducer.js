import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactDetailsSlice = createSlice({
  name: 'contactDetails',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeUser(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeUser, setFilter } =
  contactDetailsSlice.actions;
export const contactDetailsReducer = contactDetailsSlice.reducer;
