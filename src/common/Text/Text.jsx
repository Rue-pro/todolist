import React from 'react';
import { TextStyled } from './styles';

export const Text = (props) => {
    return (
        <TextStyled {...props}>{props.children}</TextStyled>
    )
}