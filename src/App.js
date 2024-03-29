import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, {name, 'description' : [phone, email]}]);
  };
  // Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addAppointment = (name, contact, date, time) => {
    setAppointments(prev => [...prev, {name, 'description' : [contact, date, time]}]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Pass the array of contacts and the appropriate callback function as props to the ContactsPage component */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> /* Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
