import styled from 'styled-components'
import { colors } from '../constants'

export const SelectStyles = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const SelectSelectedValStyles = styled.div`
  padding: 10px 0;
  border: 2px solid #e3e6ed;
  cursor: pointer;
`

export const SelectOptionsStyles = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid ${colors.gray_light};
  background-color: #ffffff;
`

export const SelectOptionStyles = styled.span`
  padding: 10px 0;
  border-bottom: 1px solid ${colors.gray_light};
  cursor: pointer;
  transition: 0.3;

  &:hover {
    background-color: ${colors.gray_light};
  }

  &:last-child() {
    border-bottom: none;
  }
`
