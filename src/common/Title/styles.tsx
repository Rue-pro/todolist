import styled, { css } from 'styled-components'
import { TitleTypeEnum } from './Title'

export interface ITitleStyledProps {
  type: TitleTypeEnum
}

export const TitleStyled = styled.span<ITitleStyledProps>`
  color: #000000;
  font-weight: 500;
  text-align: left;

  ${(props) => {
    const { type } = props
    return css`
      font-size: ${(type === TitleTypeEnum.h1 && '48px') ||
      (type === TitleTypeEnum.h2 && '32px') ||
      (type === TitleTypeEnum.h3 && '24px') ||
      (type === TitleTypeEnum.pM && '18px') ||
      (type === TitleTypeEnum.pS && '16px') ||
      '48px'};
    `
  }}
`
