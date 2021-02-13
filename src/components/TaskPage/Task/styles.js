import styled from 'styled-components'

export const TaskStyled = styled.div`
  display: flex;
  align-items: center;

  & > input {
    margin-right: 20px;
  }

  & > span {
    width: calc(100% - 188px);
    margin-right: 20px;
  }
`
