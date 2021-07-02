import React from 'react' 
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import AboutHeader from '../components/AboutHeader';
import Profile from './Profile';
import Count from './Count';

export default function About () {
  const { path } = useRouteMatch()
  return (
    <>
      <AboutHeader />
      <Switch>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${path}/count`}>
          <Count />
        </Route>
      </Switch>
      <h2 className='home'>A place to learn about my pets</h2>
    </>
  )
}