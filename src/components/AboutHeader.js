import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutHeader () {
  return (
    <>
      <ul className='abouthead'>
      <li>
        <Link to='/about/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/about/count'>Count</Link>
      </li>
    </ul>
    </>
  )
}