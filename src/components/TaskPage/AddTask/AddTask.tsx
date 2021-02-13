import React from 'react'
import { Input } from '../../../common/Input/Input'
import { Select } from '../../../common/Select/Select'
import { Button, ButtonTypeEnum } from '../../../common/Button/Button'
import { Title, TitleTypeEnum } from '../../../common/Title/Title'

export interface ITaskOption {
  value: 'approved' | 'in progress' | 'in review' | 'waiting'
  text: 'Approved' | 'In Progress' | 'In Review' | 'Waiting'
}

export interface IAddTaskProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const AddTask = (): JSX.Element => {
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
      <Input placeholder="Task" />
      <Select options={options} />
      <Select options={taskTypes} />
      <Button type={ButtonTypeEnum.primary}>Save</Button>
    </>
  )
}
