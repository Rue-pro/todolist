import React from 'react'
import { colors } from '../constants'
import Text from '../Text/Text'
import { BadgeStyled } from './styles'

export enum BadgeTypeEnum {
  approved,
  inProgress,
  inReview,
  waiting
}

export interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string
  type?: BadgeTypeEnum
}

export const Badge = ({ children, type }: IBadgeProps): JSX.Element => {
  let color = 'black'
  let bgColor = 'black'
  switch (type) {
    case BadgeTypeEnum.approved:
      color = colors.primary
      bgColor = colors.purple_light
      break
    case BadgeTypeEnum.inProgress:
      color = colors.green
      bgColor = colors.green_light
      break
    case BadgeTypeEnum.inReview:
      color = colors.red
      bgColor = colors.red_light
      break
    case BadgeTypeEnum.waiting:
      color = colors.gray
      bgColor = colors.gray_light
      break
  }
  return (
    (children && (
      <BadgeStyled bgColor={bgColor} color={color}>
        <Text color={color}>{children}</Text>
      </BadgeStyled>
    )) || <></>
  )
}
