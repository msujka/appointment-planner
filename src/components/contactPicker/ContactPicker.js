import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  /*
  Receive 4 props:
  The array of contacts
  A callback function to handle when the onChange event is triggered
  value
  name
  */

  /*
  Render a select element with the onChange attribute set to the callback passed in via props, 
  a value attribute set to the value prop, and a name attribute set to the name prop.
  */

  /*
  Add a default option element with the text “No Contact Selected” and a value attribute of "".
  */

  return (
    <div>
      <select onChange={(e) => setContact(e.target.value)} value={contact} name="contact">
        <option value="">No Contact Selected</option>
        {
          contacts.map(contactItem => {
            return <option key={contactItem.name} value={contactItem.name}>{contactItem.name}</option>;
          })
        }
      </select>
    </div>
  );
};
