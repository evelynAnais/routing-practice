import React, { useState } from 'react';

export default function SubscriberForm ({ createVolunteer }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted', name, email)
    createVolunteer({name, email})
    setName('')
    setEmail('')
  }
  

console.log(name)
  return (
    <div className='home'>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Volunteer:
        <input 
          type='text' 
          id='name' 
          name='name'
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor='email'>
        Phone:
        <input 
          type='email' 
          id='email' 
          name='email' 
          value={email}
          onChange={handleEmailChange}
        />
        <button type='submit'>Submit</button>
      </label>
    </form>
    </div>
  )
}