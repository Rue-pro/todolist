import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const SelectStyles = styled.div`
  margin-bottom: 20px;
`

export const SelectSelectedValStyles = styled.div`
  padding: 10px 0;
  border: 2px solid #e3e6ed;
  cursor: pointer;
`

export const SelectOptionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(${colors.whiteLilac});
`

export const SelectOptionStyles = styled.span`
  padding: 10px 0;
  border-bottom: 1px solid rgb(${colors.whiteLilac});
  cursor: pointer;
  transition: 0.3;

  &:hover {
    background-color: rgb(${colors.whiteLilac});
  }

  &:last-child() {
    border-bottom: none;
  }
`
