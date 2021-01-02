import styled , { css } from 'styled-components';

export const TaskStyled = styled.div`
    display: flex;
    align-items: center;
    & > input {
        margin-right: 20px;
    }
    & > span {

        margin-right: 20px;
        width: calc(100% - 188px)
    }
`