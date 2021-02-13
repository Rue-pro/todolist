import React from 'react'
import { TasksStyled } from './styles'
import { Task } from '../Task/Task'
import { Text } from '../../common/Text/Text'
import { BadgeTypeEnum } from '../../common/Badge/Badge'

export interface ITasksProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement
}

export const Tasks = (): React.ReactElement => {
  const fakeTasks = [
    {
      id: 1,
      text: 'Create Userflow Social Application Design 1',
      status: 'Approved',
      type: 'important'
    },
    {
      id: 2,
      text: 'Create Userflow Social Application Design 2',
      status: 'In Progress',
      type: 'important'
    },
    {
      id: 3,
      text: 'Create Userflow Social Application Design 3',
      status: 'In Review',
      type: 'upcoming'
    },
    {
      id: 4,
      text: 'Create Userflow Social Application Design 4',
      status: 'Waiting',
      type: 'upcoming'
    }
  ]
  return (
    <TasksStyled>
      {fakeTasks ? (
        fakeTasks.map((task) => {
          let badgeType = BadgeTypeEnum.waiting
          if (task.status === 'Approved') {
            badgeType = BadgeTypeEnum.approved
          }
          if (task.status === 'In Progress') {
            badgeType = BadgeTypeEnum.inProgress
          }
          if (task.status === 'In Review') {
            badgeType = BadgeTypeEnum.inReview
          }

          return (
            <Task key={`task_${task.id}`} badgeType={badgeType} badgeText={task.status} checkboxId={task.id}>
              {task.text}
            </Task>
          )
        })
      ) : (
        <Text>У вас нет задач</Text>
      )}
    </TasksStyled>
  )
}
