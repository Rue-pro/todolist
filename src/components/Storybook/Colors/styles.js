import styled, { css } from 'styled-components'

export const ColorsStyled = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorsHeaderStyled = styled.div`
  display: flex;
  border-bottom: 2px solid #d4d4d4;
  & > div {
    width: 33%;
    padding: 10px 1rem;
    font-weight: 500;
  }
`
export const ColorsRowStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #d4d4d4;

  & > div {
    width: 33%;
    padding: 10px 1rem;
  }
`
export const ColorsColorStyled = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  ${(props) => {
    const { color } = props
    return css`
      background-color: ${color || 'black'};
    `
  }}
`
