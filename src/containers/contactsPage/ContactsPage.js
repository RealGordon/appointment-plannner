import React,{useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";
export const ContactsPage = (props) => {
  const {contacts,addContact}=props;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [data,setData]=useState({name:'',phone:'',email:'',error:''})
  const {name,phone,email,error}=data;
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (contacts.some(c=>c.name===e.target.name.value)){
    setData(s=>({...s,error:'name already exists'}))
    return
    }
   addContact(name,phone,email)
   setData(s=>({name:'',phone:'',email:'',error:''}))
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */


const formProps={
  name,email,phone,handleSubmit,error,setData
}
  return (
    <div className="w3-container">
      <section className="w3-center">
        <h2>Add Contact</h2> 
        <ContactForm {...formProps} />
      </section>
      <hr />
      <section className="w3-center">
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
