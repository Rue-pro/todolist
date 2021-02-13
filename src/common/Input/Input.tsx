import React from 'react'
import { InputStyles } from './styles'

export interface IInputProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const Input = (props: IInputProps): JSX.Element => <InputStyles {...props} />
