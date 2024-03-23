import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter === "") return contacts;
    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name
          .toLowerCase()
          .split(" ")
          .some((c) => c.startsWith(filter.trim().toLowerCase()))
    );
  }
);
