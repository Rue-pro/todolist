import React, { useState } from 'react'
import Input from '../../../common/Input/Input'
import Select, { TSelectOption } from '../../../common/Select/Select'
import Button, { ButtonTypeEnum } from '../../../common/Button/Button'
import Title, { TitleTypeEnum } from '../../../common/Title/Title'
import api from '../../../api/api'

export interface ITaskOption {
  value: 'approved' | 'in progress' | 'in review' | 'waiting'
  text: 'Approved' | 'In Progress' | 'In Review' | 'Waiting'
}

export interface IAddTaskProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  closeModal(): void
}

export const AddTask = ({ closeModal }: IAddTaskProps): JSX.Element => {
  const [currentTask, setCurrentTask] = useState({
    id: null,
    text: '',
    status: '',
    type: ''
  })
  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    const newTask = currentTask
    newTask.text = e.currentTarget.value
    setCurrentTask(newTask)
  }
  const handleChangeStatus = (selected: TSelectOption) => {
    const newTask = currentTask
    newTask.status = selected.value
    setCurrentTask(newTask)
  }
  const handleChangeType = (selected: TSelectOption) => {
    const newTask = currentTask
    newTask.type = selected.value
    setCurrentTask(newTask)
  }

  const validate = () => {
    console.log('Validation')
  }

  const postSaveTask = () => {
    validate()
    api.tasks.addTask(currentTask)
    closeModal()
  }

  const options: Array<ITaskOption> = [
    {
      value: 'approved',
      text: 'Approved'
    },
    {
      value: 'in progress',
      text: 'In Progress'
    },
    {
      value: 'in review',
      text: 'In Review'
    },
    {
      value: 'waiting',
      text: 'Waiting'
    }
  ]
  const taskTypes = [
    {
      value: 'important',
      text: 'Important'
    },
    {
      value: 'upcoming',
      text: 'Upcoming'
    }
  ]
  return (
    <>
      <Title type={TitleTypeEnum.h2} style={{ marginBottom: '20px' }}>
        New task
      </Title>
      <Input
        placeholder="Task"
        onChange={(e) => {
          handleChangeText(e)
        }}
      />
      <Select options={options} onChangeSelect={handleChangeStatus} />
      <Select options={taskTypes} onChangeSelect={handleChangeType} />
      <Button type={ButtonTypeEnum.primary} onClick={postSaveTask}>
        Save
      </Button>
    </>
  )
}
