import styled, { css } from 'styled-components';
import { colors } from '../constants';

export const BadgeStyled = styled.div`
  font-weight: 500;
  padding: 12px 18px;
  min-width: 130px;
  box-sizing: border-box;
  border-radius: 23px;
  ${(props) => {
    const { color, bgColor } = props;
    return css`
        color: ${color || `rgb(${colors.gray})`};
        background-color: ${bgColor};
    `;
  }}
`;
