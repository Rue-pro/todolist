import React from 'react'
import Text from '../Text/Text'
import { ButtonStyled } from './styles'

export enum ButtonTypeEnum {
  primary
}

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  type?: ButtonTypeEnum
  disabled?: boolean
}

const Button = ({ children, type, disabled, ...rest }: IButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={disabled} btnType={type || ButtonTypeEnum.primary} {...rest}>
      <Text>{children}</Text>
    </ButtonStyled>
  )
}

export default Button
