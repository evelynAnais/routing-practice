import React from 'react';

export default function ProfileList ({ people }) {
  // const ppls = people.map((ppl) => (
  //   <ul key={ppl.id}> 
  //   <li>{ppl.name}</li>  
  //   </ul> 
  // ));

      

  return (
    <>
      <ul>
        {people.map((ppl, index) => (
        <li key={index}>{ppl.name}</li>
        )).slice(0,2)}
      </ul> 
    </>
  )
} 

