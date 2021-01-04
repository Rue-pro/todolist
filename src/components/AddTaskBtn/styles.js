import styled , { css } from 'styled-components';
import { colors } from '../../common/constants';
import AddTask from '../../static/images/add_icon.svg';

export const AddTaskBtnStyled = styled.button`
    position: fixed;
    bottom: 6%;
    left: 4%;
    height: 48px;
    width: 48px;
    border: none; 
    outline: none;
    cursor: pointer;
    background-color: rgb(${colors.primary});

    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    box-shadow: 0px 6px 6px rgba(${colors.primary}, 0.25);
    &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 6px;
        width: 36px;
        height: 36px;
        background-image: url(${AddTask});
    }
`