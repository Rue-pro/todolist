import styled , { css } from 'styled-components';

export const TitleStyled = styled.span`
    font-weight: 500;
    text-align: left;
    color: #000000;
    ${props => {
        const {h1, h2, h3, pM, pS} = props
        return css`
            font-size: ${h1 ? '48px'
                    : h2 ? '32px'
                    : h3 ? '24px'
                    : pM ? '18px'
                    : pS ? '16px'
                    : '48px' };
        `
    }}
`