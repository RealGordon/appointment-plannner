import React,{useMemo, useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm.js';
import { TileList } from "../../components/tileList/TileList.js";
export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const {contacts,addAppointment,appointments}=props;
  const [data,setData]=useState({title:'',contact:'',date:'',time:''});
  const {title,time,contact,date}=data;
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title,contact,date,time)
  
  };
  const tileList= useMemo(()=>{
    return (<TileList  appointments={appointments} />)},
  [appointments])
const formProps={handleSubmit,data,contacts,setData};
  return (
    <div className="w3-container">
      <section className="w3-center w3-col m6">
        <h2>Add Appointment</h2>
        <AppointmentForm  {...formProps} />
      </section>
      <hr />
      <section className="w3-center w3-col m8">
        <h2>Appointments</h2>
       {tileList}
      </section>
    </div>
  );
};
