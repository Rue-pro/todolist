import styled from 'styled-components';
import { colors } from '../constants';
import okIcon from '../../static/images/done_icon.svg';

export const CheckboxStyled = styled.input`
    position: relative;
    cursor: pointer;
    width: 18px;
    height: 18px;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: -2px;
        left: -2px;
        border-radius: 7px;
        border: 2px solid #e3e6ed;
        background-color: #ffffff;
    }
    &:checked:before {
        background-color: rgb(${colors.primary});
        border: 2px solid rgb(${colors.primary});
        box-shadow: 0px 6px 6px rgba(${colors.primary}, 0.25);
    }
    &:checked:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-image: url(${okIcon});
    }
`;
