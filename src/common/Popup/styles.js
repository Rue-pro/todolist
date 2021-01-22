import styled from 'styled-components'
import { colors } from '../constants'

export const PopupStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(-50%, -50%);
`
