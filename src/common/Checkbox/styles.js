import styled from 'styled-components'
import { colors } from '../constants'
import okIcon from '../../static/images/done_icon.svg'

export const CheckboxStyled = styled.input`
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid #e3e6ed;
    border-radius: 7px;
    background-color: #ffffff;
  }

  &:checked:before {
    border: 2px solid rgb(${colors.primary});
    background-color: rgb(${colors.primary});
    box-shadow: 0px 6px 6px rgba(${colors.primary}, 0.25);
  }

  &:checked:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${okIcon});
    background-size: contain;
  }
`
