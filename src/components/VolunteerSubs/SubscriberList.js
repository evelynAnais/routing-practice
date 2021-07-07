import React from 'react';
import SubscriberView from './SubscriberView';

export default function SubscriberList ({ volunteer, deleteVolunteer }) {
  return(
    <>
      <h2>Volunteer</h2>
      <ul>
        {volunteer.map((volunteers, index) => (
          <SubscriberView 
            deleteVolunteer={() => deleteVolunteer(index)}
            key={index}
            volunteers={volunteers}
          />
        ))}
      </ul>  
    </>
  )
}