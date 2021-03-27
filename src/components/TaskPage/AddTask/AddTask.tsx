import React, { useEffect, useState } from 'react'
import Input from '../../../common/Input/Input'
import Select, { TSelectOption } from '../../../common/Select/Select'
import Button, { ButtonTypeEnum } from '../../../common/Button/Button'
import Title, { TitleTypeEnum } from '../../../common/Title/Title'
import api from '../../../api/api'
import { TTask } from '../../../common/types'

export interface ITaskOption {
  value: 'approved' | 'in progress' | 'in review' | 'waiting'
  text: 'Approved' | 'In Progress' | 'In Review' | 'Waiting'
}

export interface IAddTaskProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children?: React.ReactNode
  closeModal(): void
  task?: TTask | null
}

export const AddTask = ({ title, closeModal, task }: IAddTaskProps): JSX.Element => {
  const [currentTask, setCurrentTask] = useState<TTask>({
    id: '',
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

  useEffect(() => {
    if (task) setCurrentTask(task)
  }, [])
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
  console.log('currentTask')
  console.log(currentTask)
  return (
    <>
      <Title type={TitleTypeEnum.h2} style={{ marginBottom: '20px' }}>
        {title}
      </Title>
      <Input
        placeholder="Task"
        onChange={(e) => {
          handleChangeText(e)
        }}
        defaultValue={currentTask.text}
      />
      <Select options={options} onChangeSelect={handleChangeStatus} currentValue={currentTask.status} />
      <Select options={taskTypes} onChangeSelect={handleChangeType} currentValue={currentTask.type} />
      <Button type={ButtonTypeEnum.primary} onClick={postSaveTask}>
        Save
      </Button>
    </>
  )
}
