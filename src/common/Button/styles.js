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
        background: linear-gradient(45deg, ${colors.btn_primary_focus}, ${colors.btn_primary});
        background-color: ${colors.btn_primary};
        &.hover,
        &:hover {
          background: linear-gradient(45deg, ${colors.btn_primary_focus}, ${colors.btn_primary_hover});
          background-color: ${(primary && `${colors.btn_primary_hover}`) || 'black'};
        }

        &.focus,
        &:focus {
          background: linear-gradient(45deg, ${colors.btn_primary_active}, ${colors.btn_primary_focus});
          background-color: ${(primary && `${colors.btn_primary_focus}`) || 'black'};
        }

        &.active,
        &:active {
          background: linear-gradient(45deg, ${colors.btn_primary_hover}, ${colors.btn_primary_active});
          background-color: ${(primary && `${colors.btn_primary_active}`) || 'black'};
        }
      `
    }
    return css`
      background-color: ${(primary && `${colors.btn_primary_disable}`) || 'black'};
    `
  }}
`
