import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  // Keep track of three local state values: the current name, phone, and email entered into the form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
    if (contacts.some((contact) => contact.name === name)) {
      alert("Contact already exists");
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    // Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
    contacts.some((contact) => contact.name === name) ? alert("Contact already exists") : addContact(name, phone, email);
    // A successful submission should clear the form fields
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* Render the ContactForm component here */}
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* Render the TileList component here */}
        <TileList data={contacts} />
      </section>
    </div>
  );
};
