import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
 // Keep track of four local state variables, the current name, contact, date, and time entered into the form
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   // Add a new appointment on form submission
    addAppointment(title, contact, date, time);
    // A successful submission should clear the form fields
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

/*
In the Add Appointment section, render an AppointmentForm with the following passed via props:
local state variables
local state variable setter functions
handleSubmit callback function
*/
/*
In the Appointments section, render a TileList with the appointment array passed via props
*/
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} contact={contact} date={date} time={time} setTitle={setTitle} setContact={setContact} setDate={setDate} setTime={setTime} handleSubmit={handleSubmit} contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};