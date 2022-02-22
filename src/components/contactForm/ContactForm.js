/* eslint-disable */ 
import React from "react";
const onChange=(e)=>{
  onChange.setData(s=>{
    const newState={...s};
    
    newState[e.target.name]=e.target.value;
    if (e.target.name==='name')newState['error']='';
    return newState
  }
  )
}
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  error,
  setData
}) => {
  onChange.setData=setData;
  return (
  <form name='form' onChange={onChange} onSubmit={handleSubmit} className="w3-container w3-center">
    <div className="w3-container w3-margin"><label className="w3-text-red">{error}</label>
    <input placeholder='name here...' name='name'  value={name} 
     required={true}
    /></div>
    <div className="w3-container w3-margin">
   
    <input required={true} placeholder='phone..eg. 0247844556' name="phone" pattern='\d{10}' type="tel" value={phone}  /></div>
    <div className="w3-container w3-margin">
    <input required={true} placeholder="email here.. eg. martin@hotmail.com" name='email' 
    type='email' value={email}  /></div>
    <input className="w3-cell w3-btn w3-margin" type='submit' />
  </form>
  );
};
