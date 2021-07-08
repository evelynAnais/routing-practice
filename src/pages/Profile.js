import React, { useState, useEffect } from 'react' 
import ProfileList from '../components/ProfileList'
const url = 'https://jsonplaceholder.typicode.com/users'

export default function Profile () {
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

  return (
    <div className='home'>
      <p>Profile of fake dogs</p>
      <ProfileList people={people} />
    </div>
  )
}


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