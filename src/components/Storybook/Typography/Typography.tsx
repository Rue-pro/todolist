import React from 'react'
import { TypographyStyled } from './styles';
import { Text } from '../../../common/Text/Text'
import { Title } from '../../../common/Title/Title';

export const Typography = () => {
    return (
        <TypographyStyled>
            <Text primary>Primary</Text>
            <Text secondary>Secondary</Text>
            <Text disabled>Disabled</Text>
            <Title h1>H1</Title>
            <Title h2>H2</Title>
            <Title h3>H3</Title>
            <Title pM>Paragraph M</Title>
            <Title pS>Paragraph S</Title>
        </TypographyStyled>
    )
}