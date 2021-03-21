import React, { useEffect, useState } from 'react'
import { TasksStyled } from './styles'
import { Task } from '../Task/Task'
import Text from '../../../common/Text/Text'
import { BadgeTypeEnum } from '../../../common/Badge/Badge'
import { TTask } from '../../../common/types'
import api from '../../../api/api'

export interface ITasksProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'all' | 'important' | 'notes' | 'links'
  Skeleton?: React.ReactNode
}

const Tasks: React.FC<ITasksProps> = ({ type, Skeleton }) => {
  const [tasks, setTasks] = useState<TTask[]>([])
  const [fetchStatus, setFetchStatus] = useState<'loading' | 'loaded'>('loading')

  useEffect(() => {
    switch (type) {
      case 'important':
        api.tasks.getTasks('important').then((result: TTask[]) => {
          setTasks(result)
          setFetchStatus('loaded')
        })
        break
      default:
        api.tasks.getTasks().then((result: TTask[]) => {
          setTasks(result)
          setFetchStatus('loaded')
        })
    }
  }, [])

  if (fetchStatus == 'loading') {
    return <>{Skeleton}</>
  } else {
    return (
      <>
        <TasksStyled>
          {tasks.length ? (
            tasks.map((task: TTask) => {
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
                <Task
                  key={`task_${task.id + '_' + type}`}
                  badgeType={badgeType}
                  badgeText={task.status}
                  checkboxId={task.id + '_' + type}
                >
                  {task.text}
                </Task>
              )
            })
          ) : (
            <Text>У вас нет задач</Text>
          )}
        </TasksStyled>
      </>
    )
  }
}

export default Tasks
