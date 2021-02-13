import styled, { css } from 'styled-components'
import { colors } from '../constants'

interface ITextStyledProps {
  color?: string
  disabled?: boolean
}

export const TextStyled = styled.span<ITextStyledProps>`
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  ${(props) => {
    const { disabled, color } = props
    if (!disabled) {
      return css`
        color: ${color} || 'black';
      `
    }
    return css`
      color: ${disabled && colors.btn_primary_text_disabled};
    `
  }}
`
