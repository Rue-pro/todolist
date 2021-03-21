import React from 'react'
import { TextStyled } from './styles'

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  disabled?: boolean
}

const Text = ({ children, ...rest }: TextProps): JSX.Element => {
  return <TextStyled {...rest}>{children}</TextStyled>
}

export default Text
