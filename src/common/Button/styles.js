import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const ButtonStyled = styled.button`
  box-sizing: border-box;
  width: 100%;
  min-width: 130px;
  padding: 12px 18px;
  border: none;
  border-radius: 23px;
  outline: none;
  cursor: pointer;

  ${(props) => {
    const { primary, disabled } = props
    if (!disabled) {
      return css`
        background-color: ${(primary && `${colors.btn_primary}`) || 'black'};

        &.hover,
        &:hover {
          background-color: ${(primary && `${colors.btn_primary_hover}`) || 'black'};
        }

        &.focus,
        &:focus {
          background-color: ${(primary && `${colors.btn_primary_focus}`) || 'black'};
        }

        &.active,
        &:active {
          background-color: ${(primary && `${colors.btn_primary_active}`) || 'black'};
        }
      `
    }
    return css`
      background-color: ${(primary && `${colors.btn_primary_disable}`) || 'black'};
    `
  }}
`
