import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn'
import { Tasks } from './Tasks/Tasks'
import { Popup } from '../../common/Popup/Popup'
import { AddTask } from './AddTask/AddTask'

export interface ITaskPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const TaskPage = (): React.ReactElement => {
  const [isModalOpen, setModalOpen] = useState(false)
  const portal: HTMLElement = document.getElementById('portal') || document.createElement('div')

  const openModal = (): void => {
    setModalOpen(true)
  }
  const closeModal = (): void => {
    setModalOpen(false)
  }

  return (
    <>
      <Tasks />
      <AddTaskBtn openModal={openModal} />
      {isModalOpen &&
        ReactDom.createPortal(
          <Popup closeModal={closeModal}>
            <AddTask />
          </Popup>,
          portal
        )}
    </>
  )
}
