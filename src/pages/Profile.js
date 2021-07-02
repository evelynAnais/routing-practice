import React, { useState } from 'react' 
import ApiCall from '../components/ApiCall'



export default function Profile ({people}) {
  // const [count, setCount] = useState
  // useEffect(() => {
  //   document.title =`The time is now ${Date.now()}`
  // })

  // useEffect(() => {
  //   document.title = `Welcome to Thinkful`
  // }, [])

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // }, [count])

  // const click = () => {
  //   setCount(count + 1)
  // }
console.log(people)
//  const ppls = people.map((ppl) => (
//     <ul key={ppl.id}> 
//       <li>{ppl.name}</li>  
//     </ul> 
//   ));

  return (
    <div className='home'>
    <p>Profile of fake dogs</p>
      
      {people}
      
    </div>
  )
}