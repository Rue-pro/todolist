import styled, { css } from 'styled-components';
import { colors } from '../constants';

export const TextStyled = styled.span`
    font-weight: 500;
    text-align: left;
    ${(props) => {
    const { primary, secondary, disabled } = props;
    return css`
            color: ${(primary && colors.text)
              || (secondary && colors.text_secondary)
              || (disabled && colors.text_light)
              || colors.text};
        `;
  }}
`;
