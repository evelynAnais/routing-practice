import React from 'react';

export default function SubscriberView ({ volunteers, deleteVolunteer }) {
  return(
    <li>
      <p>Volunteer: {volunteers.name}</p>
      <p>Phone: {volunteers.email}</p>
      <button name='delete' onClick={deleteVolunteer}>
        Unvolunteer
      </button>
    </li>
  )
}