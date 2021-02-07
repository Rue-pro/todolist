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

export const Title = ({ children, type }: ITitleProps): React.ReactElement => {
  return <TitleStyled type={type}>{children}</TitleStyled>
}
