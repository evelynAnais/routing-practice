import React, { useEffect, useState } from 'react';
import Profile from '../pages/Profile';
const url = 'https://jsonplaceholder.typicode.com/users'

export default function ApiCall () {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then(setPeople)
    .catch((error) => {
      console.log(error)
    })
  }, []);
console.log(people)

  // const ppls = people.map((ppl) => (
  //   <ul key={ppl.id}> 
  //   <li>{ppl.name}</li>  
  //   </ul> 
  // ));

// <ul>
      //   {people.map((ppl, index) => (
      //     <li key={index}>{ppl.name}</li>
      //   ))}
      // </ul> 

  return (
    <>
      {/* <Profile ppl={ppls} /> */}
    </>
  )
} 

