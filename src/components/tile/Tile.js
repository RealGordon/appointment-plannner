import React from "react";

export const Tile = ({data}) => {
  
  const values=Object.values(data);

 const details=values.map((v,i)=>{ 
 
return  <p className={((i===0)?'tile-title':'tile')} key={i}>{v}</p>

})
  return (
    <div className="tile-container w3-border w3-margin">
      {details}
    </div>
  );
};
