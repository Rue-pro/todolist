import React from 'react'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'
import { Button } from '../../common/Button/Button'
import { Title } from '../../common/Title/Title'

export const AddTask = () => {
  const options = [
    {
      value: 'approved',
      valueText: 'Approved'
    },
    {
      value: 'in progress',
      valueText: 'In Progress'
    },
    {
      value: 'in review',
      valueText: 'In Review'
    },
    {
      value: 'waiting',
      valueText: 'Waiting'
    }
  ]
  const taskTypes = [
    {
      value: 'important',
      valueText: 'Important'
    },
    {
      value: 'upcoming',
      valueText: 'Upcoming'
    }
  ]
  return (
    <>
      <Title h2>New task</Title>
      <Input placeholder="Task" />
      <Select options={options} />
      <Select options={taskTypes} />
      <Button primary>Save</Button>
    </>
  )
}
