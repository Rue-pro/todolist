import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn'
import Popup from '../../common/Popup/Popup'
import { AddTask } from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import { TTask } from '../../common/types'
import TasksSkeleton from './Tasks/TasksSkeleton/TasksSkeleton'
import Tab, { TTabProps } from '../../common/Tab/Tab'
import api from '../../api/api'

export interface ITaskPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const TaskPage = (): React.ReactElement => {
  const [isAddModalOpen, setAddModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<TTask | null>(null)
  const portal: HTMLElement = document.getElementById('portal') || document.createElement('div')

  const openAddModal = (): void => {
    setAddModalOpen(true)
  }
  const closeAddModal = (): void => {
    setAddModalOpen(false)
  }

  const openEditModal = (task: TTask): void => {
    setEditingTask(task)
    setEditModalOpen(true)
  }
  const closeEditModal = (): void => {
    setEditModalOpen(false)
  }

  const tabsPayload: Array<TTabProps> = [
    {
      title: 'All',
      body: <Tasks type={'all'} Skeleton={<TasksSkeleton />} openModal={openEditModal} />
    },
    {
      title: 'Important',
      body: <Tasks type={'important'} Skeleton={<TasksSkeleton />} openModal={openEditModal} />
    }
  ]

  return (
    <div role="main">
      <Tab getCounts={api.tasks.getTasksCounts()} tabsPayload={tabsPayload} />
      <AddTaskBtn openModal={openAddModal} />
      {isAddModalOpen &&
        ReactDom.createPortal(
          <Popup closeModal={closeAddModal}>
            <AddTask title="New Task" closeModal={closeAddModal} />
          </Popup>,
          portal
        )}
      {isEditModalOpen &&
        ReactDom.createPortal(
          <Popup closeModal={closeEditModal}>
            <AddTask title="Edit Task" closeModal={closeEditModal} task={editingTask} />
          </Popup>,
          portal
        )}
    </div>
  )
}
