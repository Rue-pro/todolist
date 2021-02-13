import styled, { css } from 'styled-components'
import { colors } from '../constants'
import okIcon from '../../static/images/done_icon.svg'

export interface TCheckboxLabelStyledProps {
  checked: boolean
}

export const CheckboxLabelStyled = styled.label<TCheckboxLabelStyledProps>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 7px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
  }

  ${(props) => {
    const { checked } = props
    return css`
      border: ${checked ? `2px solid ${colors.primary}` : '2px solid #e3e6ed'};
      background-color: ${checked ? colors.primary : 'transparent'};
      box-shadow: ${checked ? `0px 6px 6px ${colors.shadow_primary}` : 'none'};
      &:after {
        background-image: ${checked ? `url(${okIcon})` : 'none'};
      }
    `
  }}
`
