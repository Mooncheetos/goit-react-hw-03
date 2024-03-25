import { useEffect, useState } from "react";
import './App.css'
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import initContacts from "./Contact/contacts.json";

function App() {
  

  return (
    <>
      <div className="phoneBook-container">
  <h1 className="phoneBook-title">Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={addContact } onValue={ addContact} />
  <ContactList contacts={addContact} onDelete={addContact} />
</div>
    </>
  )
}

export default App;
