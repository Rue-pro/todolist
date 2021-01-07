import React from 'react'
import { colors } from '../constants'
import { Text } from '../Text/Text'
import { BadgeStyled } from './styles'

export const Badge = (props: any) => {
  let color = 'white'
  let bgColor = 'gray'

  switch (props.children) {
    case 'Approved':
      color = `rgb(${colors.primary})`
      bgColor = `rgb(${colors.purple_light})`
      break
    case 'In Progress':
      color = `rgb(${colors.green})`
      bgColor = `rgb(${colors.green_light})`
      break
    case 'In Review':
      color = `rgb(${colors.red})`
      bgColor = `rgb(${colors.red_light})`
      break
    case 'Waiting':
      color = `rgb(${colors.gray})`
      bgColor = `rgb(${colors.gray_light})`
      break
    default:
      break
  }

  return (
    <BadgeStyled bgColor={bgColor} color={color} {...props}>
      <Text color={color}>{props.children}</Text>
    </BadgeStyled>
  )
}
