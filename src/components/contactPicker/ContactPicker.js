/* eslint-disable */ 
import React from "react";

export const ContactPicker = (props) => {
  const {contacts,onChange,contact}=props;
  const options=contacts.map(({name},i)=>{
   return  <option value={name} key={`${name}_${i}`}>{name}</option>
  })
  return (
    <select className="w3-margin" value={contact} name='contact' onChange={onChange}>
      {options}
    </select>
  );
};
