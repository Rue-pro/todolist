import React from 'react'
import { AddTask } from '../AddTask/AddTask'
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn'
import { Tasks } from '../Tasks/Tasks'

export const TaskPage = () => {
  return (
    <>
      <Tasks />
      <AddTask />
      <AddTaskBtn />
    </>
  )
}
