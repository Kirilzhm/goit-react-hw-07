import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.name.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
};
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export default contactsSlice.reducer;