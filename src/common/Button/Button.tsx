import React from 'react'
import { Text } from '../Text/Text'
import { ButtonStyled } from './styles'

export enum ButtonTypeEnum {
  primary
}

export interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  type?: ButtonTypeEnum
  disabled?: boolean
}

export const Button = ({ children, type, disabled }: IButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={disabled} btnType={type || ButtonTypeEnum.primary}>
      <Text>{children}</Text>
    </ButtonStyled>
  )
}
