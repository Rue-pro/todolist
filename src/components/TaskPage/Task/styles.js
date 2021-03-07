import styled from 'styled-components'

export const TaskStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > input {
    margin-right: 20px;
  }

  & > span {
    width: calc(100% - 188px);
    margin-right: 20px;
  }
`
