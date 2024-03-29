import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  /*
  Render a form with:
    The onSubmit attribute set
    3 controlled <input> elements, one for each piece of contact data
    A submit button
    Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference
  */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" pattern="^\d{10}$" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};

