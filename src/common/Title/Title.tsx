import React from 'react'
import { TitleStyled } from './styles'

export enum TitleTypeEnum {
  h1,
  h2,
  h3,
  pM,
  pS
}

export interface ITitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  type: TitleTypeEnum
}

export const Title = ({ children, type, ...rest }: ITitleProps): JSX.Element => {
  console.log(rest)
  return (
    <TitleStyled type={type} {...rest} style={{ marginBottom: '20px' }}>
      {children}
    </TitleStyled>
  )
}
