import React, { useState ,useEffect} from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
const Home=()=>{
  const navigate=useNavigate()
  useEffect(()=>{navigate(ROUTES.CONTACTS,{replace:true})})
  return <div></div>
}
const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};
function App({data}) {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts,setContacts]=useState(data);
 const [appointments,setAppointments]=useState([]);
const addContact=(name,phone,email)=>{
  setContacts(state=>{
  return [...state, {
      name,phone,email
    }]
  })
};
const addAppointment=(title, contact, date, time )=>{
  setAppointments(state=>{
 return [...state,   {title, contact, date ,time }]
   } )
}
 

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} >
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" 
          element={<Home />}
          ></Route>
          <Route path={ROUTES.CONTACTS}
         
         element={ <ContactsPage  contacts={contacts} addContact={addContact} />}
          ></Route>
          <Route path={ROUTES.APPOINTMENTS}
           
           element={ <AppointmentsPage contacts={contacts} appointments={appointments} 
            addAppointment={addAppointment} />}>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
