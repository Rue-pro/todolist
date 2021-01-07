import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const TextStyled = styled.span`
  font-weight: 500;
  text-align: left;
  ${(props) => {
    const { primary, secondary, disabled } = props
    if (!disabled) {
      return css`
        color: ${(primary && '#FFFFFF') || (secondary && colors.text_secondary) || colors.text};
      `
    }
    return css`
      color: ${disabled && colors.btn_primary_text_disabled};
    `
  }}
`
