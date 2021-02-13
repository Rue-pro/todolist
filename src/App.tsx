import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import { Storybook } from './components/Storybook/Storybook'
import { TaskPage } from './components/TaskPage/TaskPage'
import { Workfooter } from './components/Workfooter/Workfooter'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/storybook" render={() => <Storybook />} />
      <Route exact path="/" render={() => <TaskPage />} />

      <Workfooter />
    </BrowserRouter>
  )
}

export default App
