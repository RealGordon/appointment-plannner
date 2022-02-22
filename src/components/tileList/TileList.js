import React from "react";
import {Tile} from '../tile/Tile.js'
export const TileList = (props) => {
  const {contacts,appointments}=props;
  let tiles;
  if(contacts){
    tiles=contacts.map((contact,i)=>{
   return   <Tile key={`${contact.name}_${i}`} data={contact} />
    })
  }
  else{
    tiles=appointments.map((a,i)=>{
return <Tile key={i} data={a} />
    })
  }
  return (
    <div className="w3-container">
      {tiles}
    </div>
  );
};
