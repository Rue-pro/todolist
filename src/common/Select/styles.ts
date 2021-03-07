import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const SelectStyles = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const SelectSelectedValStyles = styled.div`
  padding: 8.5px 15px;
  border: 2px solid #e3e6ed;
  line-height: normal;
  cursor: pointer;
`

export const SelectOptionsStyles = styled.ul`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid ${colors.gray_light};
  background-color: #ffffff;
`
export type TSelectOptionStyles = {
  isSelected: boolean
}

export const SelectOptionStyles = styled.li<TSelectOptionStyles>`
  padding: 8.5px 15px;
  border-bottom: 1px solid ${colors.gray_light};
  cursor: pointer;
  transition: 0.3;

  &:hover {
    background-color: ${colors.gray_light};
  }

  &:last-child() {
    border-bottom: none;
  }

  ${(props) => {
    const { isSelected } = props
    return css`
      background-color: ${isSelected ? colors.gray_light : 'transparent'};
    `
  }}
`
