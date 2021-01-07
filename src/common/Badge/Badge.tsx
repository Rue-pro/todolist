import React from 'react'
import { colors } from '../constants'
import { Text } from '../Text/Text'
import { BadgeStyled } from './styles'

export const Badge = (props: any) => {
  let color = 'black'
  let bgColor = 'black'

  switch (props.children) {
    case 'Approved':
      color = colors.primary
      bgColor = colors.purple_light
      break
    case 'In Progress':
      color = colors.green
      bgColor = colors.green_light
      break
    case 'In Review':
      color = colors.red
      bgColor = colors.red_light
      break
    case 'Waiting':
      color = colors.gray
      bgColor = colors.gray_light
      break
  }

  return (
    (props.children && (
      <BadgeStyled bgColor={bgColor} color={color} {...props}>
        <Text color={color}>{props.children}</Text>
      </BadgeStyled>
    )) || <></>
  )
}
