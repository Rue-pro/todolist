import styled from 'styled-components'
import AddTask from '../../../static/images/add_icon.svg'
import { colors } from '../../../common/constants'

export const AddTaskBtnStyled = styled.button`
  position: fixed;
  bottom: 6%;
  left: 4%;
  z-index: 9996;
  width: 48px;
  height: 48px;
  border: none;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;
  background-color: ${colors.primary};
  box-shadow: 0px 6px 6px ${colors.shadow_primary};
  outline: none;
  cursor: pointer;

  &.hover,
  &:hover {
    background: linear-gradient(45deg, ${colors.btn_primary_focus}, ${colors.btn_primary_hover});
    background-color: ${colors.btn_primary_hover};
  }

  &.focus,
  &:focus {
    background: linear-gradient(45deg, ${colors.btn_primary_active}, ${colors.btn_primary_focus});
    background-color: ${colors.btn_primary_focus};
  }

  &.active,
  &:active {
    background: linear-gradient(45deg, ${colors.btn_primary_hover}, ${colors.btn_primary_active});
    background-color: ${colors.btn_primary_active};
  }

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 6px;
    z-index: 9997;
    width: 36px;
    height: 36px;
    background-image: url(${AddTask});
  }
`
