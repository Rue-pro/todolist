import React from 'react'
import { TaskStyled } from './styles'
import { Badge } from '../../common/Badge/Badge'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { Text } from '../../common/Text/Text'
import { BadgeTypeEnum } from '../../common/Badge/Badge'

export interface ITaskProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string
  badgeType: BadgeTypeEnum
  badgeText?: string
}

export const Task = ({ children, badgeType, badgeText }: ITaskProps): React.ReactElement => {
  return (
    <TaskStyled>
      <Checkbox />
      <Text>{children}</Text>
      <Badge type={badgeType}>{badgeText}</Badge>
    </TaskStyled>
  )
}
