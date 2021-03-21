import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn'
import Popup from '../../common/Popup/Popup'
import { AddTask } from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import TasksSkeleton from './Tasks/TasksSkeleton/TasksSkeleton'
import Tab, { TTabProps } from '../../common/Tab/Tab'
import api from '../../api/api'

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

  const tabsPayload: Array<TTabProps> = [
    {
      title: 'All',
      body: <Tasks type={'all'} Skeleton={<TasksSkeleton />} />
    },
    {
      title: 'Important',
      body: <Tasks type={'important'} Skeleton={<TasksSkeleton />} />
    }
  ]

  return (
    <div role="main">
      <Tab getCounts={api.tasks.getTasksCounts()} tabsPayload={tabsPayload} />
      <AddTaskBtn openModal={openModal} />
      {isModalOpen &&
        ReactDom.createPortal(
          <Popup closeModal={closeModal}>
            <AddTask />
          </Popup>,
          portal
        )}
    </div>
  )
}
