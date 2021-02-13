import styled from 'styled-components'
import { colors } from '../constants'

interface IBadgeStyledProps {
  color: string
  bgColor: string
}

export const BadgeStyled = styled.div<IBadgeStyledProps>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  min-width: 130px;
  padding: 12px 18px;
  border-radius: 23px;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color || `rgb(${colors.gray})`};
`
