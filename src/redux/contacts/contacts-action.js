import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
