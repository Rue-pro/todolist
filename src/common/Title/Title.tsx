import React from 'react'
import { TitleH1Styled, TitleH2Styled, TitleH3Styled, TitleH4Styled, TitleH5Styled } from './styles'

export enum TitleTypeEnum {
  h1,
  h2,
  h3,
  h4,
  h5
}

export interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  type: TitleTypeEnum
}

export const Title = ({ children, type, ...rest }: ITitleProps): JSX.Element => {
  if (type === TitleTypeEnum.h2) {
    return <TitleH2Styled {...rest}>{children}</TitleH2Styled>
  }
  if (type === TitleTypeEnum.h3) {
    return <TitleH3Styled {...rest}>{children}</TitleH3Styled>
  }
  if (type === TitleTypeEnum.h4) {
    return <TitleH4Styled {...rest}>{children}</TitleH4Styled>
  }
  if (type === TitleTypeEnum.h5) {
    return <TitleH5Styled {...rest}>{children}</TitleH5Styled>
  }
  return <TitleH1Styled {...rest}>{children}</TitleH1Styled>
}
