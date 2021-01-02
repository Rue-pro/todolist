import styled , { css } from 'styled-components';
import { colors } from '../../common/constants';
export const TextStyled = styled.span`
    font-weight: 500;
    text-align: left;
    ${props => {
        const {color, bg} = props
        return css`
            color: ${color || 'rgb('+ colors.gray +')'};
            background: ${bg};
        `
    }}
`