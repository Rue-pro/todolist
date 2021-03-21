import styled, { css } from 'styled-components'
import { colors } from '../constants'

export const TabsNavStyles = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray_light};
`

export const TabStyles = styled.button`
  position: relative;
  padding: 35px 20px;
  cursor: pointer;

  &:hover,
  &.hover {
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${colors.primary};
      bottom: 0;
      left: 0;
    }
  }

  &:focus,
  &.focus {
    border: none;
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${colors.primary};
      bottom: 0;
      left: 0;
    }
  }
`

export const CountStyles = styled.span`
  color: ${colors.primary};
  background-color: ${colors.purple_light};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 500;
  margin-right: 20px;
`
export type TTabBodyStyles = {
  isActive: boolean
}

export const TabBody = styled.div<TTabBodyStyles>`
  ${(props) => {
    const { isActive } = props
    return css`
      display: ${isActive ? 'block' : 'none'};
    `
  }}
`
