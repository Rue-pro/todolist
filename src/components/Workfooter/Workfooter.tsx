import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkfooterStyles } from './styles'
export const Workfooter = (): JSX.Element => {
  return (
    <WorkfooterStyles>
      <NavLink to="/storybook">Storybook</NavLink>
      <br></br>
      <NavLink to="/">Mainpage</NavLink>
    </WorkfooterStyles>
  )
}
