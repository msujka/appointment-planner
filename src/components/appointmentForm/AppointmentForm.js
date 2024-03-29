import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  /*
  Render a form with:
    The onSubmit attribute set to the callback function passed in via props
    3 controlled input components, to be used for the name, date and time appointment data
    A ContactPicker component with the contacts list passed in via props
    A submit button
  */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
        <input type="submit" value="Add Appointment" />
      </form>
    </div>
  );
};
