import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const BadgeStyled = styled.div`
  box-sizing: border-box;
  min-width: 130px;
  padding: 12px 18px;
  border-radius: 23px;
  font-weight: 500;
  ${(props) => {
    const { color, bgColor } = props
    return css`
      background-color: ${bgColor};
      color: ${color || `rgb(${colors.gray})`};
    `
  }}
`
