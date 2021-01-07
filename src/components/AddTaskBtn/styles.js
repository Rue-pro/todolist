import styled from 'styled-components'
import { colors } from '../../common/constants'
import AddTask from '../../static/images/add_icon.svg'

export const AddTaskBtnStyled = styled.button`
  position: fixed;
  bottom: 6%;
  left: 4%;
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

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 6px;
    width: 36px;
    height: 36px;
    background-image: url(${AddTask});
  }
`
