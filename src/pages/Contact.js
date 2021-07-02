import React, { useState } from 'react' 

export default function Contact () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted', name, email)
    setName('')
    setEmail('')
  }
  

console.log(name)
  return (
    <div className='home'>
    <h2>Contact small form with name email and text area this should use state</h2>
    <p>Create a "log in" where i have a list of subcribers. will be good to
       practice nested routes and nested components</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input 
          type='text' 
          id='name' 
          name='name'
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor='email'>
        Email:
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