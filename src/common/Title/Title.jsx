import React from 'react';
import { TitleStyled } from './styles';

export const Title = (props) => {
    return (
        <TitleStyled {...props}>{props.children}</TitleStyled>
    )
}