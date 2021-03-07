import styled, { css } from 'styled-components'
import { colors } from '../constants'
import { ButtonTypeEnum } from './Button'

interface IButtonStyledProps {
  btnType: ButtonTypeEnum
  disabled?: boolean
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  box-sizing: border-box;
  width: 100%;
  min-width: 130px;
  padding: 12px 18px;
  border: none;
  border-radius: 23px;
  outline: none;
  cursor: pointer;

  & > span {
    color: #ffffff;
  }

  ${(props) => {
    const { btnType, disabled } = props
    if (!disabled) {
      return css`
        background: linear-gradient(45deg, ${colors.btn_primary_focus}, ${colors.btn_primary});
        background-color: ${colors.btn_primary};
        &.hover,
        &:hover {
          background: linear-gradient(45deg, ${colors.btn_primary_focus}, ${colors.btn_primary_hover});
          background-color: ${(btnType === ButtonTypeEnum.primary && `${colors.btn_primary_hover}`) || 'black'};
        }

        &.focus,
        &:focus {
          background: linear-gradient(45deg, ${colors.btn_primary_active}, ${colors.btn_primary_focus});
          background-color: ${(btnType === ButtonTypeEnum.primary && `${colors.btn_primary_focus}`) || 'black'};
        }

        &.active,
        &:active {
          background: linear-gradient(45deg, ${colors.btn_primary_hover}, ${colors.btn_primary_active});
          background-color: ${(btnType === ButtonTypeEnum.primary && `${colors.btn_primary_active}`) || 'black'};
        }
      `
    }
    return css`
      background-color: ${(btnType === ButtonTypeEnum.primary && `${colors.btn_primary_disable}`) || 'black'};
    `
  }}
`
