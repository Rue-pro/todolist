import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const SelectStyles = styled.div`
  margin-bottom: 20px;
`

export const SelectSelectedValStyles = styled.div`
  border: 2px solid #e3e6ed;
  padding: 10px 0;
  cursor: pointer;
`

export const SelectOptionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(${colors.whiteLilac});
`

export const SelectOptionStyles = styled.span`
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid rgb(${colors.whiteLilac});
  transition: 0.3;
  &:hover {
    background-color: rgb(${colors.whiteLilac});
  }
  &:last-child() {
    border-bottom: none;
  }
`
