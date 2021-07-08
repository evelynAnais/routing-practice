import React, { useState } from 'react' 
import ContactForm from '../components/ContactForm'
import SubscriberForm from '../components/VolunteerSubs/SubscriberForm'
import SubscriberList from '../components/VolunteerSubs/SubscriberList'

export default function Contact () {
  const [volunteer, setVolunteer] = useState([]);

  const createVolunteer = (newVolunteer) =>
  setVolunteer((currentVolunteers) => [
    newVolunteer,
    ...currentVolunteers,
  ]);

  const deleteVolunteer = (indexToDelete) =>
  setVolunteer((currentVolunteers) =>
  currentVolunteers.filter((post, index) => index !== indexToDelete)
  );

  return (
    <div className='home'>
      <h2>Contact small form with name email and text area this should use state</h2>
      <p>Create a "log in" where i have a list of volunteer. will be good to
        practice nested routes and nested components</p>
      <ContactForm />
      <h3>Be added to our list of volunteers!</h3>
      <SubscriberForm createVolunteer={createVolunteer} />
      <SubscriberList 
        volunteer={volunteer}
        deleteVolunteer={deleteVolunteer}
      />
    </div>
  )
}