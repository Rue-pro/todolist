import React from 'react'
import { Text } from '../Text/Text'
import { ButtonStyled } from './styles'

export const Button = (props: any) => (
  <ButtonStyled {...props}>
    <Text {...props}>{props.children}</Text>
  </ButtonStyled>
)
