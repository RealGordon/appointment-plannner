/* eslint-disable */ 
import React, { useMemo } from "react";
import {ContactPicker} from '../contactPicker/ContactPicker.js';
const onChange=(e)=>{
 onChange.setData(state=>{
    const newState={...state};
   newState[e.target.name]=e.target.value;
   return newState
  });
}
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  /*
  {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,setData
  }*/
export const AppointmentForm = (props) => {
 const {data,contacts,handleSubmit,setData}=props;
  const {contact,title,date,time}=data;
 
 onChange.setData=setData;
 
const contactPicker=useMemo (()=>(
<ContactPicker contact={contact} onChange={onChange} contacts={contacts} />),
[onChange,contacts])
  return (
    <form onSubmit={handleSubmit} className='w3-container w3-center'>
      <input required className="w3-margin" placeholder="title of the appointment" name='title'  onChange={onChange} value={title} />
     <input required className="w3-margin" name='date' min={getTodayString()} onChange={onChange} type='date'  value={date}  />
      <input required className="w3-margin" type='time' name='time' onChange={onChange} value={time} />
      {contactPicker}
      <input className="w3-cell w3-margin w3-btn" type='submit' value='Submit' />
    </form>
  );
};
