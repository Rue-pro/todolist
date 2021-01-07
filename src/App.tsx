import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, NavLink } from 'react-router-dom'
import './App.css'
import { Storybook } from './components/Storybook/Storybook'
import { TaskPage } from './components/TaskPage/TaskPage'

function App() {
  return (
    <BrowserRouter>
      <Route path="/storybook" render={() => <Storybook />} />
      <Route exact path="/" render={() => <TaskPage />} />

      <NavLink to="/storybook">Storybook</NavLink>
    </BrowserRouter>
  )
}

export default App
