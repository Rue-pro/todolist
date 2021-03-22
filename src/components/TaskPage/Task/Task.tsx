import React from 'react'
import { TaskStyled } from './styles'
import Badge, { BadgeTypeEnum } from '../../../common/Badge/Badge'
import Checkbox from '../../../common/Checkbox/Checkbox'
import Text from '../../../common/Text/Text'

export interface ITaskProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string
  badgeType: BadgeTypeEnum
  badgeText?: string
  checkboxId?: string
}

const Task = ({ children, badgeType, badgeText, checkboxId, ...rest }: ITaskProps): React.ReactElement => {
  const checkboxUniqueId = checkboxId ? 'task_checkbox_' + checkboxId : ''
  return (
    <TaskStyled>
      <Checkbox checkboxId={checkboxUniqueId} style={{ marginRight: '10px' }} />
      <Text {...rest}>{children}</Text>
      <Badge type={badgeType}>{badgeText}</Badge>
    </TaskStyled>
  )
}

export default Task
