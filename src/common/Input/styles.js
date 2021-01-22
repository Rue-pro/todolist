import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const InputStyles = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0;
  border: 2px solid #e3e6ed;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  cursor: pointer;

  ${(props) => {
    const { primary, secondary, disabled, color } = props
    if (!disabled) {
      return css`
        color: ${color || (primary && '#FFFFFF') || (secondary && colors.text_secondary) || colors.text};
      `
    }
    return css`
      color: ${disabled && colors.btn_primary_text_disabled};
    `
  }}

  &:focus {
    border: 2px solid #cfd1d8;
    outline: none;
  }
`
