import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const ButtonStyled = styled.div`
  font-weight: 500;
  padding: 12px 18px;
  min-width: 130px;
  box-sizing: border-box;
  border-radius: 23px;
  ${(props) => {
    console.log(props)
    const { primary } = props
    return css`
      color: ${primary ? '#ffffff' : 'yellow'};
      background-color: ${primary ? `rgb(${colors.primary})` : 'yellow'};
    `
  }}
`
