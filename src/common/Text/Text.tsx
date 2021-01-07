import React from 'react'
import { TextStyled } from './styles'

export const Text = (props: any) => <TextStyled {...props}>{props.children}</TextStyled>
