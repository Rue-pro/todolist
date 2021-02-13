import React from 'react'
import { InputStyles } from './styles'

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export const Input = (props: IInputProps): JSX.Element => <InputStyles {...props} />
