import React, { useState } from 'react'
import { AddTask } from '../AddTask/AddTask'
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn'
import { Tasks } from '../Tasks/Tasks'
import { Popup } from '../../common/Popup/Popup'

export const TaskPage = () => {
  const [showPopup, setShowPopup] = useState(false)

  const clickAddTaskBtnHandler = () => {
    setShowPopup(true)
  }
  return (
    <>
      <Tasks />
      <AddTaskBtn clickAddTaskBtnHandler={clickAddTaskBtnHandler} />
      {showPopup && (
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
          <AddTask />
        </Popup>
      )}
    </>
  )
}
