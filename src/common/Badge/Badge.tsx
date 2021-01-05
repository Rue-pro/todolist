import React from 'react';
import { colors } from '../constants';
import { Text } from '../Text/Text';
import { BadgeStyled } from './styles';

export const Badge = (props:any) => {
  let color = 'white';
  let bgColor = 'gray';

  switch (props.children) {
    case 'Approved':
      color = `rgb(${colors.primary})`;
      bgColor = `rgb(${colors.blueChalk})`;
      break;
    case 'In Progress':
      color = `rgb(${colors.jungleGreen})`;
      bgColor = `rgb(${colors.polar})`;
      break;
    case 'In Review':
      color = `rgb(${colors.jasper})`;
      bgColor = `rgb(${colors.bridesmaid})`;
      break;
    case 'Waiting':
      color = `rgb(${colors.coolgrey})`;
      bgColor = `rgb(${colors.whiteLilac})`;
      break;
    default:
      break;
  }

  return (
    <BadgeStyled bgColor={bgColor} color={color} {...props}>
      <Text color={color}>{props.children}</Text>
    </BadgeStyled>
  );
};
